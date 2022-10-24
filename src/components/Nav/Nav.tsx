import { NavItem } from "./NavItem";
import { NavbarItems } from "./NavItems";

const Nav = () => {

  return (
    <div className="hidden lg:block fixed h-full pt-6 px-6">
      <div className="h-full flex flex-col justify-start items-center gap-4">
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
        <div className="border-r-2 border-zinc-800 h-full mt-2" />
      </div>
    </div>
  );
};

export default Nav;