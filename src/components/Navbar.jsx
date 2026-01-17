import React from "react";

const Navbar = () => {
  return (
    <header className="w-full h-[64px] px-6 flex items-center justify-between bg-white border-b">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img
          src="/navbar/square-menu.png"
          alt="menu"
          className="w-6 h-6 cursor-pointer"
        />
        <h3 className="text-lg font-semibold text-gray-800">Dashboard</h3>
      </div>

      {/* Center Logo */}
      <img
        src="/navbar/brand_blue_shree_480.png"
        alt="brand"
        className="object-contain w-[62.15px] h-[47.52px]"
      />

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {/* Action Icons */}
        <div className="flex items-center gap-4">
          {["1", "2", "3"].map((icon) => (
            <img
              key={icon}
              src={`/navbar/${icon}.png`}
              alt={`icon-${icon}`}
              className="w-[22px] h-[22px]  cursor-pointer hover:opacity-80 transition"
            />
          ))}
        </div>

        {/* User Section */}
        <div className="flex items-center gap-3 pl-4 ">
          <img
            src="/navbar/BellRinging.png"
            alt="notification"
            className="w-10 h-10 cursor-pointer"
          />
          <div>
            <h1 className="font-inter font-semibold text-[20px] leading-[1.2] text-center">
              JOYMALYA PODDAR
            </h1>
            <p className="font-inter font-semibold text-[12px] leading-[1.2] tracking-[4px] text-[#13AFCD]">
              ACCOUNTS
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
