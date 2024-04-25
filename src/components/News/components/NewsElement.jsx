import "../News.scss";

function NewsElement({ img, title, description, date }) {
  const imgStyles = {
    background: `url(${img})`, 
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover"
  }

  return ( 
    <>
      <div className="element">
        <div className="element__img" style={imgStyles}></div>
        <h2 className="element__title">{title}</h2>
        <p className="element__description">{description}</p>
        <span className="element__date">{date}</span>
      </div>
    </>
   )
}

export default NewsElement;
