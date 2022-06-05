import React from "react";
import '../css/navbar.css';
import { Link } from "react-router-dom";

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
    { key: 1, name: "HOME", to: "/", class: "nav-menu" },
    { key: 2, name: "TASKS", to: "/tasks", class: "nav-menu" },
    { key: 3, name: "RANKING", to: "/ranking", class: "nav-menu" },
    { key: 4, name: "EBOOK", to: "/ebook", class: "nav-menu" },
    { key: 5, name: "PROFILE", to: "/profile", class: "nav-menu" },
  ];
  return (
    <div className="ml-auto text-3xl py-2 md:block hidden">
      <ul className=" flex space-x-10">
        {path.map((link) => {
          return (
            <li key={link.key} className={link.class}>
              <Link to={link.to}>{link.name}</Link>
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
