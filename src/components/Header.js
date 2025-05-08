import "./Header.css";
import Nav from "./Nav";
import Logo from "../images/logo.png";
import MenuIcon from "../images/menu-icon.png";
import BasketIcon from "../images/basket-icon.png";
import { Link } from "react-router";

function Header() {
  return (
    <header>
      <a href="#doormat-nav">
        <img src={MenuIcon} alt="Menu icon" id="hamburger-menu"/>
      </a>
      <img src={BasketIcon} alt="Basket icon" id="basket-icon" />
      <Link to="/">
        <img src={Logo} alt="Restaurant logo" />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;