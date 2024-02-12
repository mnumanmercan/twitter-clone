import Account from "./account";
import Logo from "./logo";
import Menu from "./menu";

const Sidebar = () => {
  return (
    <aside className="w-[275px] max-h-screen min-h-screen flex flex-col">
      <Logo />
      <Menu />
      <Account />
    </aside>
  );
};

export default Sidebar;
