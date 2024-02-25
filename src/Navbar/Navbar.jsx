import React, { useState } from "react";
import { menuBarIcon, menuCrossIcon } from "../icons/icons";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("active-0");

  const handleItemClick = (index) => {
    setActive(`active-${index}`);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navMenu = [
    {
      name: "Home",
      URL: "",
      icon: "",
    },
    {
      name: "About me",
      URL: "",
      icon: "",
    },
    {
      name: "Projects",
      URL: "",
      icon: "",
    },
    {
      name: "Service",
      URL: "",
      icon: "",
    },
    {
      name: "Contact",
      URL: "",
      icon: "",
    },
    {
      name: "Let's Talk",
      URL: "",
      icon: (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="256" height="256">
            <path fill="#2196f3" d="M14.1 191.4 186 43c15-13 38.8-2.4 38.8 17.7v78.2C381.6 140.7 506 172.1 506 320.8c0 60-38.7 119.4-81.4 150.5-13.3 9.7-32.3-2.5-27.4-18.2 44.3-141.6-21-179.2-172.5-181.4v85.9c0 20.2-23.7 30.7-38.8 17.7L14.1 226.9c-10.8-9.4-10.8-26.2 0-35.5z" className="color2196f3 svgShape"></path>
          </svg>
        </>
      ),
      
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#">
            Sade<span>k</span>
          </a>
        </div>
        <div className="menu">
          <ul>
            {navMenu.map((item, index) => (
              <li key={index}>
                <a
                  onClick={() => handleItemClick(index)}
                  className={`${active === `active-${index}` ? "active" : ""}`}
                  href="#"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-toggle">
          {isOpen ? (
            <div onClick={toggleMenu}>{menuCrossIcon} </div>
          ) : (
            <div onClick={toggleMenu}>{menuBarIcon} </div>
          )}
        </div>
      </div>
      {isOpen ? (
        <div className={`${isOpen ? 'mobile-menu-item':'mobile-menu-item-close'}`}>
          <div className="logo">
            <a href="#">
              Sade<span>k</span>
            </a>
          </div>
          <ul>
            {navMenu.map((item, index) => (
              <li key={index}>
                <a
                  onClick={() => handleItemClick(index)}
                  className={`${active === `active-${index}` ? "active" : ""}`}
                  href="#"
                >
                  {item.name} {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
