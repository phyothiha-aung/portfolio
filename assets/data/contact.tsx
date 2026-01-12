import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail, IoDocumentTextOutline } from "react-icons/io5";

export type Contact = {
  name: string;
  href: string;
  icon: () => React.ReactElement;
};

const contact: Contact[] = [
  {
    name: "Resume",
    href: "/resume.pdf",
    icon: () => <IoDocumentTextOutline size={24} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/phyothiha-aung",
    icon: () => <FaGithub size={24} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/phyo-thiha-aung-8ab728273",
    icon: () => <FaLinkedin size={24} />,
  },
  {
    name: "Email",
    href: "mailto:phyothihaaung.dev@gmail.com",
    icon: () => <IoMail size={28} />,
  },
];

export default contact;
