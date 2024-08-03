import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiSpotify,
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
    url: "https://www.instagram.com/meta.hitesh85",
    value: "@meta.hitesh85",
    icon: SiInstagram,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/h85._._",
    value: "@h85._._",
    icon: SiInstagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/hiteshmeta",
    value: "@hiteshmeta",
    icon: SiTwitter,
  },
];
