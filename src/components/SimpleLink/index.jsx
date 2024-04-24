import { Link } from "react-router-dom";
import "./SimpleLink.scss";

function SimpleLink({ label, path, handleOnHover = () => {} }) {
  return (
    <Link className="simple-link" 
          to={path}
          onMouseOver={handleOnHover}
    >
      {label}
    </Link>
  )
}

export default SimpleLink;
