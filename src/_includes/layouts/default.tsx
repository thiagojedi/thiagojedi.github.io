import { FunctionComponent as FC } from "preact";

import { NormalPageData } from "../../types.ts";

const DefaultLayout: FC<NormalPageData> = (
  { children, comp: { BaseHead } },
) => {
  return (
    <html lang="pt-br">
      <BaseHead />
      <body>
        {children}
      </body>
    </html>
  );
};

export default DefaultLayout;
