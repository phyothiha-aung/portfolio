const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full  bg-background pb-8 px-6">
      <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      <div className="app-container mx-auto mt-8">
        <p className="text-gray-400 font-light tracking-wide text-center">
          &copy; {currentYear}{" "}
          <span className="text-white font-medium tracking-normal text-sm">
            Handcrafted
          </span>{" "}
          by{" "}
          <span className="text-primary font-exo font-semibold hover:brightness-125 transition-all cursor-default text-nowrap">
            Phyo Thiha Aung
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
