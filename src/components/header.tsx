import { SITE_DESCRIPTION, SITE_TITLE } from '../config';

const Header = () => (
  <header>
    <div>
      <h1>
        <a href="/">{SITE_TITLE}</a> <small>{SITE_DESCRIPTION}</small>
      </h1>
    </div>
  </header>
);

export default Header;
