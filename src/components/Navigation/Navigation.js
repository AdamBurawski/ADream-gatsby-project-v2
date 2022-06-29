import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// const MenuLinks = styled.nav`
//   ul {
//     transition: transform 1s;
//   }
// `
// transform: ${({ ul }) => (ul ? "translateX(0%)" : "translateX(100%)")};
class MenuMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      showMenu: !prevState.showMenu,
    }));
  }
  render() {
    const navigation = (
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={this.handleClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/poznaj-przestrzen" onClick={this.handleClick}>
              Poznaj przestrzeń
            </Link>
          </li>
          <li>
            <Link to="/oferta" onClick={this.handleClick}>
              Oferta
            </Link>
          </li>
          <li>
            <Link to="/articles" onClick={this.handleClick}>
              Aktualności
            </Link>
          </li>
          <li className="wlasneBiuro">
            <Link to="/wlasne-biuro" onClick={this.handleClick}>
              Własne biuro
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={this.handleClick}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    );
    return (
      <nav className="navStyles">
        <span className="logo">
          <Link to="/">LOGO</Link>
        </span>
        <div className="menuIcon" onClick={this.handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {this.state.showMenu ? navigation : ""}
        {/* {this.state.showMenu
          ? (navigation = { style: transStart })
          : (navigation = { style: transEnd })} */}
      </nav>
    );
  }
}

export default MenuMobile;
