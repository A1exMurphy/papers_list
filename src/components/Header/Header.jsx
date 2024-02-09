import "./Header.css";
import { Link } from "react-router-dom";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ReorderIcon from "@mui/icons-material/Reorder";

// Paper's List header is a clickable link to /home

export default function Header() {
  return (
    <Link to="/home">
      <div className="header">
        <h2 className="nav-title">
          <div className="icon">
            <ListAltIcon fontSize="50px" />
          </div>
          Paper's
          List
        </h2>
      </div>
    </Link>
  );
}
