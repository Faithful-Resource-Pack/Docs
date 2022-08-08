export const GET = async () => {
  const postFiles = import.meta.glob('../pages/*/*.md');
  const iterablePostFiles = Object.entries(postFiles);

  const posts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(2, -3);

      return {
        meta: metadata,
        path: postPath,
      };
    })
  );

  return {
    body: posts
  };
}