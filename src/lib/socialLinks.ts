import { SiGithub, SiInstagram, SiSpotify, SiTwitter } from "react-icons/si";
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
    url: "https://www.linkedin.com/in/hitesh-meta/",
    value: "@hitesh-meta",
    icon: SiGithub,
  },
  {
    name: "GitHub",
    url: "https://github.com/hiteshmeta85",
    value: "@hiteshmeta85",
    icon: SiGithub,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/meta.hitesh85/",
    value: "@meta.hitesh85",
    icon: SiInstagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/MetaHitesh85",
    value: "@MetaHitesh85",
    icon: SiTwitter,
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/user/31v5nmble3tcr3xs4ms2ib4zuw7e",
    value: "@Hitesh85",
    icon: SiSpotify,
  },
];
