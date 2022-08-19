type Post = {
  url: string;
  compiledContent: () => string;
  frontmatter: {
    title: string;
  } & (
    | {
        draft: true;
        pubDate: undefined;
      }
    | { draft?: false; pubDate: string }
  );
};
