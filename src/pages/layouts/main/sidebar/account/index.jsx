import { Popover, Transition } from "@headlessui/react";
import { useAccount } from "~/store/auth/hooks";
import AccountPopover from "./popover";

const Account = () => {
  const account = useAccount();
  return (
    <div className="mt-auto w-full">
      <Popover className="relative w-[96%]">
        <Popover.Button className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left items-center outline-none">
          <img
            src={account.avatarUrl}
            className="w-10 h-10 rounded-full"
            alt=""
          />
          <div className="mx-3 text-[15px]">
            <h6 className="font-bold leading-5">{account.fullName}</h6>
            <div className="text-[#71767b]">@{account.username}</div>
          </div>
          <svg viewBox="0 0 24 24" className="text-[#e7e9ea] ml-auto" width={18.75}>
            <path 
            fill="currentColor"
            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
          </svg>
        </Popover.Button>
        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="pacity-200"
          leaveTo="opacity-0"
        >
          <Popover.Panel className="absolute mb-3 py-3 bottom-full w-[300px] rounded-2xl left-1/2 -translate-x-1/2 bg-black shadow-box overflow-hidden">
            <AccountPopover username={account.username} />
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Account;
