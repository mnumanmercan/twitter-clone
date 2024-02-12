import { Popover } from "@headlessui/react";
import { useAccount } from "~/store/auth/hooks";

const Account = () => {
  const account = useAccount();
  return (
    <div className="mt-auto">
      <Popover className='relative'>
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
        </Popover.Button>
        <Popover.Panel className='absolute bottom-full w-[300px] left-1/2 -translate-x-1/2'>hi</Popover.Panel>
        <Popover.Panel className="w-[300px] left-1/2 -translate-x-1/2 absolute bottom-0 left-0 bg-black shadow-box rounded-xl overflow-hidden">
          <div

            className="px-4 h-14 w-full transition-colors inline-flex flex-col items-center gap-5 hover:bg-[#eff3f41a] cursor-pointer"
          >
            <div className="">Add an existing account</div>
            <div className="">Log out @{account.username}</div>
          </div>

      </Popover.Panel>
      </Popover>
    </div>
  );
};

export default Account;
