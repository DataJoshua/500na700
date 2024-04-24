import logo from "../../assets/imgs/logo.svg";
import Button from "../Button";
import MenuLink from "../MenuLink";
import SimpleLink from "../SimpleLink";
import "./Header.scss";
import burger from "../../assets/imgs/burger.svg";
import burgerActive from "../../assets/imgs/burger-active.svg";
import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => {
    setIsActive(prev => !prev)
  }

  return ( 
    <>
      <nav className="nav">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="nav__links">
          <MenuLink label="Пункт 1">
            <SimpleLink label="О 500на700" path="/some"/>
            <SimpleLink label="Документы" path="/"/>
            <SimpleLink label="Команда" path="/some"/>
            <SimpleLink label="Стратегия" path="/"/>
          </MenuLink>
          <MenuLink label="Пункт 2"/>
          <SimpleLink label="Пункт 3"/>
          <SimpleLink label="Пункт 4"/>
          <SimpleLink label="Пункт 5"/>
        </div>

        <div className="nav__button">
          <Button label="Связаться с нами"/>
        </div>

        <div className="responsive">
          <div onClick={toggleMenu}>
            { isActive ? <img className="responsive__burger" src={burgerActive} alt=""/> :
              <img className="responsive__burger" src={burger} alt=""/>}
          </div>

          <div className={`responsive__wrapper ${isActive ? "appear" : ""}`}>
            <div className="responsive__links">
              <MenuLink label="Пункт 1" path="/">
                <SimpleLink label="О 500на700" path="/some"/>
                <SimpleLink label="Документы" path="/"/>
                <SimpleLink label="Команда" path="/some"/>
                <SimpleLink label="Стратегия" path="/"/>
              </MenuLink>
              <MenuLink label="Пункт 2" path="/some">
              </MenuLink>
              <SimpleLink label="Пункт 3" path="/some"/>
              <SimpleLink label="Пункт 4" path="/some"/>
              <SimpleLink label="Пункт 5" path="/some"/>
            </div>
            <div className="responsive__button">
              <Button label="Связаться с нами"/>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;
