import React, { useState } from "react";
import { menuItems } from "./MenuItems";
import "./Style/Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "wrapper active" : "wrapper"}>
      <Container>
        <nav className="navbarItems ">
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <ClearIcon className={navbar ? "icons active" : "icons"} />
            ) : (
              <MenuIcon className={navbar ? "icons active" : "icons"} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    activeClass="actives"
                    to={item.url}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={700}
                    className={navbar ? "nav-links active" : "nav-links"}
                    onClick={closeMobileMenu}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default Navbar;
