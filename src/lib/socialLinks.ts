import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiUnsplash,
} from "react-icons/si";
import { IconType } from "react-icons";

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
    name: "Twitter",
    url: "https://twitter.com/hiteshmeta",
    value: "@hiteshmeta",
    icon: SiTwitter,
  },
];
