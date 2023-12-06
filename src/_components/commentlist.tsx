import { Fragment, type FunctionComponent as FC } from "preact";

const fediVerseApps = [
  {
    url: "https://joinmastodon.org/",
    name: "Mastodon",
  },
  {
    url: "https://calckey.org/join/",
    name: "CalcKey",
  },
  {
    url: "https://akkoma.social/",
    name: "Akkoma",
  },
  {
    url: "https://pixelfed.org/",
    name: "PixelFed",
  },
];

const FediVerseList: FC = () => {
  return (
    <Fragment>
      {fediVerseApps.map(({ url, name }) => (
        <Fragment key={name}>
          <a href={url}>{name}</a>,{" "}
        </Fragment>
      ))}
    </Fragment>
  );
};

type Props = {
  mastodonLink: string;
  language: string;
  commentsBackup?: string;
};

const CommentList: FC<Props> = (
  { mastodonLink, language, commentsBackup },
) => {
  if (!mastodonLink) {
    return null;
  }

  return (
    <section
      id="comments"
      data-url={mastodonLink}
      data-fallback={commentsBackup}
    >
      <hr />
      <h2>{language === "pt-br" ? "Comentários" : "Comments"}</h2>
      {commentsBackup && (
        language === "pt-br"
          ? (
            <p>
              Esses comentários foram postados via ActivityPub, porém a postagem
              original não está mais acessível.
            </p>
          )
          : (
            <p>
              The following comments were posted via ActivityPub, but the
              original post is no longer accessible.
            </p>
          )
      )}
      {commentsBackup === undefined && (
        language === "pt-br"
          ? (
            <p>
              Você pode adicionar o seu comentário respondendo a{" "}
              <a href={mastodonLink}>esse toot no Mastodon</a> da sua conta no
              {" "}
              <FediVerseList />{" "}
              ou qualquer outra rede social com suporte a ActivityPub.
            </p>
          )
          : (
            <p>
              You can leave a comment by replying to{" "}
              <a href={mastodonLink}>this Mastodon post</a>{" "}
              from your own account on <FediVerseList />{" "}
              or any other ActivityPub-capable social network.
            </p>
          )
      )}
      <noscript>
        {language === "pt-br"
          ? (
            <p>
              A sessão de comentários depende da execução de JavaScript. Caso
              não seja possível,{" "}
              <a href={mastodonLink}>você pode olhar as respostas aqui</a>.
            </p>
          )
          : (
            <p>
              Displaying the comment section requires JavaScript. Alternatively,
              {" "}
              <a href={mastodonLink}>you can look at the replies here</a>.
            </p>
          )}
      </noscript>
    </section>
  );
};

export default CommentList;
