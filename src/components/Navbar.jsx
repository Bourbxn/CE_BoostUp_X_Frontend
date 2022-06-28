import React, { useState } from "react";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const path = [
  { key: 1, name: "HOME", to: "/", class: "nav-menu" },
  { key: 2, name: "TASKS", to: "/tasks", class: "nav-menu" },
  { key: 3, name: "RANKING", to: "/ranking", class: "nav-menu" },
  { key: 4, name: "EBOOK", to: "/ebook", class: "nav-menu" },
  { key: 5, name: "PROFILE", to: "/profile", class: "nav-menu" },
  { key: 6, name: "LOGOUT", to: "/logout", class: "nav-menu" },
];
const NavLinkActive = ({ isActive }) => {
  return isActive ? "nav-menu-active" : "";
};
const HamburgerLinkActive = ({ isActive }) => {
  return isActive ? "hamburger-menu-active" : "";
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="navbar z-50 md:p-4 top-0 p-5 ">
        <div className="flex space-x-3 font-bold md:pl-3 mr-auto">
          <h1 className="normal-case md:text-4xl text-3xl text-white">
            CEBOOSTUP
          </h1>
          <h1 className="normal-case md:text-6xl text-5xl text-red-logo">X</h1>
        </div>
        <div className="flex-none hidden lg:block  ml-auto">
          <ul className="space-x-8 menu-horizontal  p-0 md:pr-3">
            {path.map((link) => {
              return (
                <li key={link.key} className="text-white text-xl font-bold">
                  <NavLink className={NavLinkActive} to={link.to}>
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:hidden block">
          <label className="btn btn-outline btn-info swap swap-rotate justify-items-center">
            <input
              type="checkbox"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
            <FontAwesomeIcon
              icon={faBars}
              className="swap-off fill-current text-2xl font-bold"
            />
            <FontAwesomeIcon
              icon={faXmark}
              className="swap-on fill-current text-2xl font-bold"
            />
          </label>
        </div>
      </div>
      <div
        className={`hamburger-menu  space-y-10 ${isOpen ? "block" : "hidden"}`}
      >
        <ul>
          {path.map((link) => {
            return (
              <NavLink
                className={HamburgerLinkActive}
                to={link.to}
                key={link.key}
              >
                <li
                  className={`text-white p-3 hover:rounded-lg text-xl font-bold hover:bg-black my-3`}
                >
                  {link.name}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
