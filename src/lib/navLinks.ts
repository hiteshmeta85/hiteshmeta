import {
  FiBook,
  FiBookOpen,
  FiClock,
  FiHeadphones,
  FiHome,
  FiPaperclip,
  FiUser,
} from "react-icons/fi";
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
    name: "Now",
    slug: "/now",
    icon: FiClock,
  },
  {
    name: "Links",
    slug: "/links",
    icon: FiPaperclip,
  },
  {
    name: "Blogs",
    slug: "/blogs",
    icon: FiBook,
  },
  {
    name: "Guestbook",
    slug: "/guestbook",
    icon: FiBookOpen,
  },
  {
    name: "Spotify",
    slug: "/spotify",
    icon: FiHeadphones,
  },
];
