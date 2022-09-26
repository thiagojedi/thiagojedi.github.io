import { FunctionComponent as FC } from "preact";

import { NormalPageData } from "../../types.ts";

const DefaultLayout: FC<NormalPageData> = (
  { title, children, comp: { BaseHead, Header, Footer, } },
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
