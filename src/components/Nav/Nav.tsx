import { NavItem } from "./NavItem";
import { navLinks } from "../../lib/navLinks";
import dynamic from "next/dynamic";
import { Link, socialLinks } from "../../lib/socialLinks";

const ThemeButton = dynamic(() => import("./ThemeButton"), { ssr: false });

const Nav = () => {
  const github = socialLinks.find((link) => link.name === "GitHub") as Link;
  const linkedin = socialLinks.find((link) => link.name === "LinkedIn") as Link;

  return (
    <div className="fixed hidden h-full px-6 pt-6 lg:block">
      <div className="flex h-full flex-col items-center justify-start gap-4">
        {navLinks.map((item, index) => {
          return (
            <NavItem
              key={index}
              slug={item.slug}
              icon={item.icon}
              name={item.name}
            />
          );
        })}
        <a href={linkedin.url} target="_blank" rel="noreferrer">
          <NavItem name={linkedin.name} icon={linkedin.icon} />
        </a>
        <a href={github.url} target="_blank" rel="noreferrer">
          <NavItem name={github.name} icon={github.icon} />
        </a>
        <ThemeButton />
        <div className="mt-2 h-full border-r-2 border-zinc-800" />
      </div>
    </div>
  );
};

export default Nav;
