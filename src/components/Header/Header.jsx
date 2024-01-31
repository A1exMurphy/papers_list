import "./Header.css";
import { Link } from "react-router-dom";

// Paper's List header is a clickable link to /home

export default function Header() {
  return (
    <Link to="/home">
      <h2 className="nav-title">
        Paper'
        <div className="s">S</div> List
      </h2>
    </Link>
  );
}
