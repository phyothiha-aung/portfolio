import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

const Navbar = () => {
  return (
    <div className="w-full fixed bg-background z-50">
      <nav className="app-container h-17 flex items-center justify-between top-0">
        <Link href="/" className="logo">
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
              href={item.href}
              key={item.href}
              aria-label={item.label}
              className="nav-item"
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
