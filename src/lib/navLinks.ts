import type { IconType } from "react-icons";
import { FiHome, FiPaperclip, FiTerminal, FiUser } from "react-icons/fi";

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
