// eslint-disable-next-line react/prop-types
const AccountPopover = ({ username }) => {
  return (
    <div className="">
      <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full text-[#e7e9ea] text-[15px] font-bold leading-5">Add an existing account</button>
      <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full text-[#e7e9ea] text-[15px] font-bold leading-5">Log out @{username}</button>
    </div>
  );
};

export default AccountPopover;
