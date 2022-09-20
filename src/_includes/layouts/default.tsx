import { FunctionComponent as FC } from "preact";

import { NormalPageData } from "../../types.ts";

const DefaultLayout: FC<NormalPageData> = ({ children }) => {
  return (
    <html lang="pt-br">
      <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />

        <link rel="stylesheet" href="/global.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default DefaultLayout;
