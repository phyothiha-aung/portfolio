"use client";
import { Link } from "react-scroll";
import MenuIcon from "./MenuIcon";
import { useEffect, useRef, useState } from "react";

const links = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="w-full fixed bg-background z-50">
      <nav className="app-container h-17 flex items-center justify-between top-0 relative">
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

        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl cursor-pointer text-primary"
        >
          <MenuIcon isOpen={isOpen} />
        </button>

        {isOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute bg-background w-[90%] mx-auto top-19 border border-white/10 rounded-2xl px-6 py-6 text-white shadow-2xl"
          >
            <div className="flex flex-col gap-5 text-center">
              {links.map((item) => (
                <Link key={item} to={item} onClick={() => setIsOpen(false)}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
