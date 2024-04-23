import { Link } from "react-router-dom";
import arrowSVG from "../../assets/imgs/arrow.svg";
import "./MenuLink.scss";

function MenuLink( { label, path } ) {
  return ( 
    <>
      <Link to={path} className="menu-link">
        <h4>{label}</h4>
        <div className="svg-container">
          <img src={arrowSVG} alt="arrow-svg"/>
        </div>
      </Link>
    </>
  )
}

export default MenuLink;
