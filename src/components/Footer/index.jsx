import "./Footer.scss";
import logo from "../../assets/imgs/logo-white.svg";
import youtube from "../../assets/imgs/youtube.svg";
import telegram from "../../assets/imgs/telegram.svg";
import vk from "../../assets/imgs/vk.svg";
import SimpleLink from "../SimpleLink";
import { nanoid } from "nanoid";

function Footer() {
  const links = [
    { id: nanoid(), label: "О нас", path: "/" },
    { id: nanoid(), label: "FAQ", path: "/" },
    { id: nanoid(), label: "Проекты", path: "/" },
    { id: nanoid(), label: "Контакты", path: "/" },
    { id: nanoid(), label: "Новости", path: "/" }

  ]

  return ( 
    <>
      <footer className="footer">
        <div className="footer__logos">
          <img src={logo} alt="logo" />
          <div className="footer__social">
            <img src={youtube} alt="" />
            <img src={telegram} alt="" />
            <img src={vk} alt="" />
          </div>
        </div>

        <div className="footer__links">
          {links.map(val => <SimpleLink key={val.id} {...val} />)}
        </div>

        <div className="footer__data">
          <p className="footer__data-element"> г. Горгород, ул. Мегаполисная, 1 </p>
          <p className="footer__data-element"> +7 (000) 000-00-00 </p>
          <p className="footer__data-element"> email@email.ru </p>
        </div>
      </footer>
    </>
  )
}

export default Footer;