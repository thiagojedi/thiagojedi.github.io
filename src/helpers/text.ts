export const excerpt = (content: string) => {
  const firstHash = content.indexOf('</p>');

  const excerpt = content.substring(0, firstHash).replace('<p>', '');

  return excerpt;
};
