import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// const MenuLinks = styled.nav`
//   ul {
//     transition: transform 1s;
//   }
// `
// transform: ${({ ul }) => (ul ? "translateX(0%)" : "translateX(100%)")};
class MenuMobile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }))
  }
  render() {
    const navigation = (
      <nav>
        <ul>
          <li>
            <Link to="/poznaj-przestrzen">Poznaj przestrzeń</Link>
          </li>
          <li>
            <Link to="/oferta">Oferta</Link>
          </li>
          <li>
            <Link to="/lokalizacja">Lokalizacja</Link>
          </li>
          <li className="wlasneBiuro">
            <Link to="/wlasne-biuro">Własne biuro</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    )
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
    )
  }
}

export default MenuMobile
