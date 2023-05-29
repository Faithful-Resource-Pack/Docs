import fs from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { JSDOM } from 'jsdom';

const __dirname = dirname(fileURLToPath(new URL(import.meta.url)));

interface FileInfo {
  metadata: Record<string, object>
}

function extractTableOfContents(filePath: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const dom = new JSDOM(data);
      const document = dom.window.document;
      const tableOfContentsDivs = document.getElementsByClassName('table-of-content');

      if (tableOfContentsDivs.length > 0) {
        const tableOfContentsDiv = tableOfContentsDivs[0];
        const headerTag = tableOfContentsDiv.querySelector('h1, h2, h3, h4, h5, h6');

        if (headerTag) {
          headerTag.remove();
        }

        resolve(tableOfContentsDiv.innerHTML.trim());
      } else {
        reject(new Error('Table of contents not found.'));
      }
    });
  });
}

export const GET = async () => {
  const postFiles = import.meta.glob('../pages/*/*.md');
  const iterablePostFiles = Object.entries(postFiles);

  const posts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const resolved = await resolver();
      const { metadata } = resolved as FileInfo;
      const postPath = path.slice(2, -3);

      return {
        toc: await extractTableOfContents(join(__dirname, path)).catch(() => null),
        meta: metadata,
        path: postPath,
      };
    })
  );

  return {
    body: posts
  };
}