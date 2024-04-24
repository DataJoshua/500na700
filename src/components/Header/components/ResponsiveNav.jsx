import "../Header.scss"
import LinkList from "./LinkList";
import burger from "../../../assets/imgs/burger.svg";
import burgerActive from "../../../assets/imgs/burger-active.svg";
import Button from "../../Button";
import { useRef, useState } from "react";

function ResponsiveNav() {
  const [isActive, setIsActive] = useState(false)
  const responsiveRef = useRef()

  const toggleResponsiveBar = () => {
    setIsActive(prev => !prev)
    const responsiveWrapper = responsiveRef.current

    if(responsiveWrapper.classList.contains("appear")) {
      responsiveWrapper.classList.remove("appear")
      responsiveWrapper.classList.add("disappear")
    }
    else {
      responsiveWrapper.classList.remove("disappear")
      responsiveWrapper.classList.add("appear")
    }
  }

  return (  
    <>
      <div className="responsive">
        <div onClick={toggleResponsiveBar}>
          { isActive ? <img className="responsive__burger" src={burgerActive} alt=""/> :
                       <img className="responsive__burger" src={burger} alt=""/>
          }
        </div>

        <div ref={responsiveRef} className="responsive__wrapper">
          <div className="responsive__links">
            <LinkList/>
          </div>
          <div className="responsive__button">
            <Button label="Связаться с нами"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResponsiveNav;
