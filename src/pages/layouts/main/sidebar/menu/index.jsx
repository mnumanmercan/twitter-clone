import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utils/consts";
import More from "./more";
import NewPost from "./post";

const Menu = () => {
  return (
    <nav className="">
      {mainMenu.map((menu, index) => (
        <NavLink to={menu.path} className="block group" key={index}>
          {({ isActive }) => (
            <div
              className={classNames(
                "px-3 py-[11px] rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]",
                {
                  "font-bold": isActive,
                }
              )}
            >
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu?.notification && (
                  <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                    {menu?.notification}
                  </span>
                )}
                {!isActive ? menu.icon.passive : menu.icon.active}
              </div>
              <div className="pr-4 text-xl text-[#e7e9ea] ">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      <More />
      <NewPost />
    </nav>
  );
};

export default Menu;
