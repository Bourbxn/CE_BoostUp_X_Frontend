import React, { useState } from "react";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const NavLogo = () => {
  return (
    <div className="nav-logo">
      CEBOOSTUP&nbsp;
      <span className="nav-logo-x">X</span>
    </div>
  );
};

const NavList = () => {
  const path = [
    { key: 1, name: "HOME", to: "/", class: "nav-menu" },
    { key: 2, name: "TASKS", to: "/tasks", class: "nav-menu" },
    { key: 3, name: "RANKING", to: "/ranking", class: "nav-menu" },
    { key: 4, name: "EBOOK", to: "/ebook", class: "nav-menu" },
    { key: 5, name: "PROFILE", to: "/profile", class: "nav-menu" },
    { key: 6, name: "LOGOUT", to: "/logout", class: "nav-menu" },
  ];

  const NavLinkActive = ({ isActive }) => {
    return isActive ? "nav-menu-active" : undefined;
  };

  const [isOpen, setIsOpen] = useState(false);

  const changeIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={changeIcon} className="nav-menu-icon">
        {isOpen && <IoClose />}
        {!isOpen && <IoMenu />}
      </div>
      <ul
        className={`nav-hamberger-menu ${
          isOpen
            ? "nav-menu-open"
            : "nav-menu-close"
        }`}
      >
        {path.map((link) => {
          return (
            <li key={link.key} className="nav-menu">
              <NavLink className={NavLinkActive} to={link.to}>
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="nav-layout z-10">
      <div className="nav-control">
        <NavLogo />
        <NavList />
      </div>
    </nav>
  );
};

export default Navbar;
