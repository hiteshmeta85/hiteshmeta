import { NavItem } from "./NavItem";
import { NavbarItems } from "./NavItems";

const Nav = () => {
  return (
    <div className="fixed hidden h-full px-6 pt-6 lg:block">
      <div className="flex h-full flex-col items-center justify-start gap-4">
        {NavbarItems.map((item, index) => {
          return (
            <NavItem
              key={index}
              slug={item.slug}
              icon={item.icon}
              name={item.name}
            />
          );
        })}
        <div className="mt-2 h-full border-r-2 border-zinc-800" />
      </div>
    </div>
  );
};

export default Nav;
