import { Link } from "react-router-dom";
import arrowSVG from "../../assets/imgs/arrow.svg";
import "./MenuLink.scss";
import { useState } from "react";

function MenuLink( { label, path, children = null } ) {
  const [isArrowActive, setIsArrowActive] = useState()

  const toggleArrow = () => setIsArrowActive(prev => !prev)

  return ( 
    <>
      <div onMouseEnter={toggleArrow} onMouseLeave={toggleArrow} className="menu-wrapper">
        <Link to={path} className="menu-link">
          <div className="menu-link__wrapper">
            <h4>{label}</h4>
            <div className={`svg-container ${isArrowActive ? "active" : ""}`}>
              <img src={arrowSVG} alt="arrow-svg"/>
            </div>
          </div>
        </Link>
        <div className="menu-wrapper__show">
          {children}
        </div>
      </div>
    </>
  )
}

export default MenuLink;
