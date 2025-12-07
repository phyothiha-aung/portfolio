const links = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  return (
    <div className="w-full fixed">
      <nav className="app-container h-17 flex items-center justify-between top-0 z-50 px-5 sm:px-10 md:px-16 lg:px-24">
        <div className="logo">
          <div className="circle" />
          <div className="text">
            <span className="front">PTA</span>
            <span className="back">PTA</span>
          </div>
        </div>

        <ul className="nav-item-group">
          {links.map((item) => (
            <li key={item} className="nav-item">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
