import type { IconType } from "react-icons";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiUnsplash,
  SiX,
} from "react-icons/si";

export type Link = {
  name: string;
  url: string;
  value: string;
  icon: IconType;
};

export type SocialLinks = Link[];

export const socialLinks: SocialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hiteshmeta",
    value: "@hiteshmeta",
    icon: SiLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/hiteshmeta85",
    value: "@hiteshmeta85",
    icon: SiGithub,
  },
  {
    name: "Unsplash",
    url: "https://unsplash.com/@hiteshmeta",
    value: "@hiteshmeta",
    icon: SiUnsplash,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/hiteshmeta_",
    value: "@hiteshmeta_",
    icon: SiInstagram,
  },
  {
    name: "X",
    url: "https://x.com/hiteshmeta",
    value: "@hiteshmeta",
    icon: SiX,
  },
];
