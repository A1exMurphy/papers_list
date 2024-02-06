import "./Header.css";
import { Link } from "react-router-dom";

// Paper's List header is a clickable link to /home

export default function Header() {
  return (
    <Link to="/home">
      <div className="header">
      <h2 className="nav-title">
        Paper's List
      </h2>
      </div>
    </Link>
  );
}
