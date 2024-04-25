import arrow from "../../../assets/imgs/arrow.svg";

function FaqElement() {
  return ( 
    <>
      <div className="faq-element">
        <div className="faq-element__container">
          <h1 className="faq-element__title">Какие услуги предоставляет ваша студия?</h1>
          <img className="faq-element__icon" src={arrow} alt="" />
        </div>
        <p className="faq-element__description description-appear">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore asperiores nemo ducimus cumque dolorem repellendus, molestias fugiat beatae! Iure ipsa consectetur minus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et voluptatem quasi veritatis!</p>
      </div>
    </> 
  )
}

export default FaqElement;