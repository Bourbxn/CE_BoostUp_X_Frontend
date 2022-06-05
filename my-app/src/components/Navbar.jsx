import React from "react";
import '../css/navbar.css';
import { NavLink } from "react-router-dom";

const NavLogo = () => {
  return (
    <div className="nav-logo group">
      <h1 className="py-1 text-3xl ">CEBOOSTUP</h1>
      <span
        className="nav-logo-x"
      >
        &nbsp;X
      </span>
    </div>
  );
};

const NavList = () => {
  const path = [
    { key: 1, name: "HOME", to: "/", class: "link-underline link-underline-black text-white nav-menu" },
    { key: 2, name: "TASKS", to: "/tasks", class: "link-underline link-underline-black text-white nav-menu" },
    { key: 3, name: "RANKING", to: "/ranking", class: "link-underline link-underline-black text-white nav-menu" },
    { key: 4, name: "EBOOK", to: "/ebook", class: "link-underline link-underline-black text-white nav-menu" },
    { key: 5, name: "PROFILE", to: "/profile", class: "link-underline link-underline-black text-white nav-menu" },
    { key: 6, name: "LOGOUT", to: "/logout", class: "link-underline link-underline-black text-white nav-menu" },
  ];

  const NavLinkActive = ({isActive}) => {
      return(
        isActive ? "nav-menu-active" : undefined
      );
  }

  return (
    <div className="ml-auto text-3xl py-2 md:block hidden">
      <ul className=" flex space-x-10">
        {path.map((link) => {
          return (
            <li key={link.key} className={link.class}>
              <NavLink className={NavLinkActive} to={link.to}>{link.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="nav-layout">
       <NavLogo />
       <NavList />
    </nav>
  );
};

export default Navbar;
