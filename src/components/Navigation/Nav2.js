import React from "react";
import { Link } from "gatsby";

const Nav2 = () => (
  <nav className="navStyles2">
    <span className="logo">
      <Link to="/">LOGO</Link>
    </span>
    <ul>
      <li>
        <Link to="/poznaj-przestrzen">Poznaj przestrzeń</Link>
      </li>
      <li>
        <Link to="/oferta">Oferta</Link>
      </li>
      <li>
        <Link to="/articles">Aktualności</Link>
      </li>
      <li className="wlasneBiuro">
        <Link to="/wlasne-biuro">Własne biuro</Link>
      </li>
      <li>
        <Link to="/kontakt">Kontakt</Link>
      </li>
    </ul>
  </nav>
);

export default Nav2;
