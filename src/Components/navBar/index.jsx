import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.scss";

const data = [
  {
    label: "HOME",
    to: "#home",
  },
  {
    label: "ABOUT ME",
    to: "#about",
  },
  {
    label: "SKILLS",
    to: "#skills",
  },
  {
    label: "RESUME",
    to: "#resume",
  },
  {
    label: "PROJECTS",
    to: "#projects",
  },
  {
    label: "ACHIEVEMENTS",
    to: "#achievements",
  },
  {
    label: "CONTACT",
    to: "#contact",
  },
];

const NavBar = ({ toggleIcon, setToggleIcon }) => {
  const [active, setActive] = useState("");

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
    setActive("active");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <a href="#home" className="navbar__container__logo">
            <FaReact size={30} />
          </a>
        </div>
        <div>
        <ul className={`navbar__container__menu ${toggleIcon ? active : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <a
                className="navbar__container__menu__item__links"
                href={item.to}
                onClick={() => setToggleIcon(!toggleIcon)}>
                {item.label}
              </a>
            </li>
          ))}
          </ul>
          </div>
        <div className="nav__icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
