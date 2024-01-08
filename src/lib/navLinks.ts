import { FiHome, FiPaperclip, FiTerminal, FiUser } from "react-icons/fi";
import { IconType } from "react-icons";

export type NavItem = {
  name: string;
  slug: string;
  icon: IconType;
};

export type NavLinks = NavItem[];

export const navLinks: NavLinks = [
  {
    name: "Home",
    slug: "/",
    icon: FiHome,
  },
  {
    name: "About",
    slug: "/about",
    icon: FiUser,
  },
  {
    name: "Skills",
    slug: "/skills",
    icon: FiTerminal,
  },
  {
    name: "Links",
    slug: "/links",
    icon: FiPaperclip,
  },
  // {
  //   name: "Blogs",
  //   slug: "/blogs",
  //   icon: FiBook,
  // },
];
