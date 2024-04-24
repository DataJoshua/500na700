import logo from "../../assets/imgs/logo.svg";
import Button from "../Button";
import "./Header.scss";
import LinkList from "./components/LinkList";
import ResponsiveNav from "./components/ResponsiveNav";

function Header() {
  return ( 
    <>
      <nav className="nav">
        <div>
          <img src={logo} alt="nav-logo" />
        </div>
        <div className="nav__links">
          <LinkList/>
        </div>

        <div className="nav__button">
          <Button label="Связаться с нами"/>
        </div>

        <ResponsiveNav/>
      </nav>
    </>
  )
}

export default Header;
