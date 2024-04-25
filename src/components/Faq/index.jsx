import "./Faq.scss";
import FaqElement from "./components/FaqElement";

function Faq() {
  return ( 
    <>
      <div className="faq__container">
        <div className="faq__title-wrapper">
          <h1 className="faq__title">FAQ</h1>
        </div>

        <div className="faq__list">
          <FaqElement/>
          <FaqElement/>
          <FaqElement/>
        </div>
      </div>
    </>
  )
}

export default Faq;