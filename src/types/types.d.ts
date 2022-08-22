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

type Repository = {
  language?: string | null;
  name: string;
  description: string | null;
  pushed_at?: string | null;
  fork: boolean;
};
