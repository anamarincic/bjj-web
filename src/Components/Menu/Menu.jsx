import "./Menu.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useState } from "react";

export function Menu() {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = (e) => {
    setSideBar(!sideBar);
  };

  return (
    <div className="navbar">
      <a href="#naslovna">
        <Logo className="logo_icon" />
      </a>
      <span>
        <i
          className={sideBar ? "fas fa-times" : "fas fa-bars"}
          onClick={showSideBar}
        />
      </span>
      <nav
        onClick={showSideBar}
        className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <a href="#naslovna" className="nav-text">
              NASLOVNA
            </a>
          </li>
          <li className="navbar-toggle">
            <a href="#onama" className="nav-text">
              O NAMA
            </a>
          </li>
          <li className="navbar-toggle">
            <a href="#info" className="nav-text">
              INFO
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
