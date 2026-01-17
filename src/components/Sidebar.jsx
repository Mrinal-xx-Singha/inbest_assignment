import React from "react";
import sidebarItems from "../constants/sidebar";

const Sidebar = () => {
  return (
    <div className="w-[326px] h-screen border border-red-200 bg-white">
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center h-[95px] border-b">
        <div className="flex items-center gap-2">
          <img className="w-[63px] h-[50px]" src="logo.png" alt="logo" />
          <img
            className="w-[149px] h-[67px]"
            src="Rectangle.png"
            alt="rectangle"
          />
        </div>
        <p className="text-sm font-semibold text-gray-600 mt-1">HRMS</p>
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col mt-4 px-4 gap-1">
        {sidebarItems.map((item) => (
          <li
            key={item.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-black transition ${item.active ? "bg-[#E3EBFF] text-blue-600" : "text-gray-700"}`}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-6 h-6 object-contain"
            />
            <p className="text-sm font-medium">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
