import type { FC, NormalPageData } from "../../types.ts";

const DefaultLayout: FC<NormalPageData> = (
  { title, children, comp: { BaseHead, Header, Footer } },
) => {
  return (
    <html lang="pt-br">
      <BaseHead title={title} />
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
};

export default DefaultLayout;
