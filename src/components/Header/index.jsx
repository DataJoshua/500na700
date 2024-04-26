import logo from "../../assets/imgs/logo.svg";
import Button from "../Button";
import "./Header.scss";
import LinkList from "./components/LinkList";
import ResponsiveNav from "./components/ResponsiveNav";
import { useNavigate } from "react-router-dom";

function Header({ handleOnModal }) {
  const navigate = useNavigate()

  return ( 
    <>
      <div className="nav-container">
        <nav className="nav">
          <div onClick={()=> navigate("/")}>
            <img src={logo} alt="nav-logo" />
          </div>
          <div className="nav__links">
            <LinkList/>
          </div>

          <div className="nav__button">
            <Button handleOnClick={handleOnModal} label="Связаться с нами"/>
          </div>

          <ResponsiveNav handleOnModal={handleOnModal}/>
        </nav>
      </div>
    </>
  )
}

export default Header;
