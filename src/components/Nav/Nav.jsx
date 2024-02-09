import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";
import Header from "../Header/Header";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <>
      <Header />
      <div className="nav">
        <Link to="/home"></Link>
        <div>
          {/* If no user is logged in, show these links */}
         

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              
            
              <LogOutButton className="navLink" />

              <Link className="navLink" to="/eventarchive">
                Archive
              </Link>

              <Link className="navLink" to="/removedevents">
                Removed Events
              </Link>
            </>
          )}

          <Link className="navLink" to="/about">
            About
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
