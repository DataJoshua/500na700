import "../News.scss";
import { useNavigate } from "react-router-dom";

function NewsElement({ id, img, title, description, date }) {
  const navigate = useNavigate()

  const imgStyles = {
    background: `url(${img})`, 
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover"
  }

  const handleOnClick = () => {
    navigate(`/news/${id}`)
  }

  return ( 
    <>
      <div className="element" onClick={handleOnClick}>
        <div className="element__img" style={imgStyles}></div>
        <h2 className="element__title">{title}</h2>
        <p className="element__description">{description}</p>
        <span className="element__date">{date}</span>
      </div>
    </>
   )
}

export default NewsElement;
