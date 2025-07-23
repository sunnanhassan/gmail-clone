import React from "react";
import { IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import {
  MdOutlineDrafts,
  MdOutlineKeyboardArrowDown,
  MdOutlineWatchLater,
} from "react-icons/md";
import { TbSend2 } from "react-icons/tb";

const SidebarItems = [
  {
    icon: <LuPencil size={24} />,
    text: "Inbox",
  },
  {
    icon: <IoMdStar size={24} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={24} />,
    text: "Snoozed",
  },
  {
    icon: <TbSend2 size={24} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={24} />,
    text: "Drafts",
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={24} />,
    text: "More",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF] hover:cursor-pointer">
          <LuPencil size={24} />
          Compose
        </button>
      </div>

      {/* Add vertical gap between sidebar items */}
      <div className="text-gray-500 flex flex-col gap-y-2">
        {SidebarItems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200"
            >
              <p>{item.icon}</p>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
