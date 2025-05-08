import { Fragment } from "lume/jsx-runtime";

const Sidebar = () => {
  return (
    <Fragment>
      <img
        src="https://github.com/thiagojedi.png"
        alt="Thiago Abreu"
        class="rounded"
        id="profile-pic"
      />
      <h2>Sobre mim</h2>
      <p lang="pt_BR">
        Meu nome é Thiago Cerqueira, conhecido como Thiago Jedi pelos meus
        colegas.
      </p>
      <p lang="en_US">
        My name is Thiago Cerqueira, also known as Thiago Jedi by my colleagues.
      </p>
      <div lang="pt_BR">
        <p>
          Nascido e criado em Natal, RN, sou Bacharel em Ciência da Computação
          pela UFRN. Atualmente trabalho como programador e lider técnico em São
          Paulo, SP.
        </p>
        <p>
          Minha principal linguagem de programação atualmente é TypeScript, mas
          tenho algum conhecimento em linguagens como C#, Vala, Java, Ruby,
          Python...
        </p>
        <p>Além disso, toco contrabaixo, jogo online e conto piadas ruins.</p>
      </div>
      <dl>
        <dt>
          <i class="fa-brands fa-github" /> Github:
        </dt>
        <dd>
          <a href="https://github.com/thiagojedi">@thiagojedi</a>
        </dd>
        <dt>
          <i class="fa-brands fa-linkedin" /> LinkedIn:
        </dt>
        <dd>
          <a href="https://www.linkedin.com/in/thiagojediabreu/">
            Thiago Cerqueira
          </a>
        </dd>
        <dt>
          <i class="fa-brands fa-mastodon" /> Mastodon:
        </dt>
        <dd>
          <a rel="me" href="https://bolha.us/@jedi">
            @jedi@bolha.us
          </a>
        </dd>
      </dl>
    </Fragment>
  );
};

export default Sidebar;
