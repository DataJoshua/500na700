import { Link } from "react-router-dom";
import "./SimpleLink.scss";

function SimpleLink({ label, path }) {
  return ( 
    <Link className="simple-link" 
          to={path}>{label}
    </Link>
  )
}

export default SimpleLink;
