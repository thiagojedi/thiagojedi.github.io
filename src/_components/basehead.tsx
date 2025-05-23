import type { FC, PropsWithChildren } from "../types.ts";

const BaseHead: FC<PropsWithChildren<{ title?: string }>> = (
  { title, children },
) => {
  return (
    <head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {title ? <title>JediComp - {title}</title> : <title>JediComp</title>}

      <link rel="stylesheet" href="/global.css" />
      <link rel="stylesheet" href="/fontawesome/css/fontawesome.css" />
      <link rel="stylesheet" href="/fontawesome/css/brands.min.css" />
      <link rel="stylesheet" href="/fontawesome/css/solid.min.css" />

      {children}
    </head>
  );
};

export default BaseHead;
