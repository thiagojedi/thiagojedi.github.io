const DefaultLayout = ({ children, comps }) => {
    
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
