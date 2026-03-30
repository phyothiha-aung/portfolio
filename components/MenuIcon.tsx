const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg width="23" height="23" viewBox="0 0 23 20">
    <path
      fill="transparent"
      strokeWidth="3"
      stroke="currentColor"
      strokeLinecap="round"
      className="transition-all duration-300 ease-in-out"
      d={isOpen ? "M 3 16.5 L 18.5 2.5" : "M 2 2.5 L 20 2.5"}
    />
    <path
      fill="transparent"
      strokeWidth="3"
      stroke="currentColor"
      strokeLinecap="round"
      className="transition-all duration-300 ease-in-out"
      d="M 2 9.423 L 20 9.423"
      style={{ opacity: isOpen ? 0 : 1 }}
    />
    <path
      fill="transparent"
      strokeWidth="3"
      stroke="currentColor"
      strokeLinecap="round"
      className="transition-all duration-300 ease-in-out"
      d={isOpen ? "M 3 2.5 L 18.5 16.346" : "M 2 16.346 L 20 16.346"}
    />
  </svg>
);
export default MenuIcon;
