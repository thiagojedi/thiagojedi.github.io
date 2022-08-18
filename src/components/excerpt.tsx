const Excerpt = ({ content }) => {
  const firstHash = content.indexOf('</p>');

  const excerpt = content.substring(0, firstHash).replace('<p>', '');

  return <p dangerouslySetInnerHTML={{ __html: excerpt }} />;
};

export default Excerpt;
