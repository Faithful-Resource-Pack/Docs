/* eslint-disable @typescript-eslint/ban-ts-comment */
import { parse, walk } from "svelte/compiler";

/** 
 * @param {string[]} extensions Image file extensions allowed
 * @returns {import('svelte/types/compiler/preprocess').PreprocessorGroup[]} <img /> to <Image /> preprocessors */
const preprocessors = function(extensions) {
  return [{
    markup: async function({ content }) {
      let ast;
      /** @type {import("svelte/types/compiler/interfaces").Element[]} */
      const imageNodes = [];
      
      try {
        ast = parse(content);
      } catch (e) {
        console.error(e, "Error parsing component content");
      }
  
      walk(ast, {
        /** @param {import("svelte/types/compiler/interfaces").Element} node */
        enter: async (node) => {
          if (!["Element", "Fragment", "InlineComponent"].includes(node.type)) {
            return;
          }

          if (node.name !== "img") return;

          let source_prop = (node.attributes || []).find((a) => a.name === "src");
          let source = source_prop ? source_prop.value[0].raw : undefined;
          if (!source || !extensions.find(e => source.endsWith(e))) return;

          imageNodes.push(node);
        },
      });
  
      const new_content = [];
      let last_end = 0;
      imageNodes.forEach((node) => {
        new_content.push(content.substring(last_end, node.start));
        
        let after = "<Image blur={false} " + content.substring(node.start + 4, node.end);

        let lazy_attr = node.attributes.find(a => a.name === 'loading');

        if(lazy_attr) {
          let found = content.substring(lazy_attr.start, lazy_attr.end);
          after = after.replace(found, 'lazy');
        }
  
        // single tag add /
        if(!after.endsWith("/>"))
          after = after.substring(0, after.length - 1) + "/>";
  
        new_content.push(after);
        last_end = node.end;
      });
      new_content.push(content.substring(last_end));
  
      return {
        code: new_content.join("")
      }
    },
    script: function({ content, attributes, markup }) {
      if(attributes.context === "module") return;

      if(markup.includes('<Image'))
        content = "\nimport Image from '@src/components/Image.svelte';" + content;
      
      return {
        code: content
      }
    }
  }]
}

export const img_preprocess = preprocessors;