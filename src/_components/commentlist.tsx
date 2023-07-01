
const CommentList = ({ mastodonLink, language }) => {
  if (!mastodonLink) {
    return null;
  }

  return (
    <section id="comments" data-url={mastodonLink}>
      <hr />
      <h2>{language === "pt-br" ? "Comentários" : "Comments"}</h2>
      {language === "pt-br" ? (
        <p>
          Você pode adicionar o seu comentário respondendo a{" "}
          <a href={mastodonLink}>esse toot no Mastodon</a> da sua conta no{" "}
          <a href="https://joinmastodon.org/">Mastodon</a>, ou qualquer outra
          rede social com suporte a ActivityPub.
        </p>
      ) : (
        <p>
          You can leave a comment by replying to{" "}
          <a href={mastodonLink}>this Mastodon post</a> from your own account on{" "}
          <a href="https://joinmastodon.org/">Mastodon</a>, or any other
          ActivityPub-capable social network.
        </p>
      )}
      <noscript>
        {language === "pt-br" ? (
          <p>
            A sessão de comentários depende da execução de JavaScript. Caso não
            seja possível,{" "}
            <a href={mastodonLink}>você pode olhar as respostas aqui</a>.
          </p>
        ) : (
          <p>
            Displaying the comment section requires JavaScript. Alternatively,{" "}
            <a href={mastodonLink}>you can look at the replies here</a>.
          </p>
        )}
      </noscript>
      <template>
        <article className="comment">
          <header className="header">
            <img />

            <h3></h3>

            <small>
              <a>
                <time></time>
              </a>
            </small>
          </header>
          <div className="content"/>
        </article>
      </template>
    </section>
  );
};

export default CommentList;
