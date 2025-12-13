"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const ScrollIndicator = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHidden(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="#about"
      title="Scroll to About Section"
      className={`scroller transition-opacity duration-300 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    />
  );
};

export default ScrollIndicator;
