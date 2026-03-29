"use client";
import { Link } from "react-scroll";

const links = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

const Navbar = () => {
  return (
    <div className="w-full fixed bg-background z-50">
      <nav className="app-container h-17 flex items-center justify-between top-0">
        <Link to="Home" spy={true} smooth={true} className="logo">
          <div className="circle" />
          <div className="text" aria-label="Phyo Thiha Aung">
            <span className="front" aria-hidden>
              PTA
            </span>
            <span className="back" aria-hidden>
              PTA
            </span>
          </div>
        </Link>

        <ul className="nav-item-group">
          {links.map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              aria-label={item}
              className="nav-item"
              activeClass="active"
            >
              {item}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
