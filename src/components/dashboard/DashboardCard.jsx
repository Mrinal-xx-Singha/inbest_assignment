import React from "react";

const DashboardCard = ({
  title,
  highlightValue,
  data,
  borderColor,
  textColor,
}) => {
  return (
    <div
      className={`bg-white border border-gray-200 border-r-4 ${borderColor} rounded-xl p-5 flex flex-col`}
    >
      {/* Title */}
      <h4 className="font-inter font-semibold text-[16px] text-[#191D1D] mb-4">
        {title}
      </h4>

      {/* Content */}
      <div className="flex justify-between items-start">
        {/* Left: Breakdown */}
        <div className="flex flex-col gap-2">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="flex justify-between text-[13px] gap-6">
              <div>
                <p className="text-[#828687] font-inter font-normal ">
                  {key}-{value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Highlight Number */}
        <div className="ml-6">
          <p
            className={`font-inter font-semibold text-[38px] ${textColor} pt-8`}
          >
            {highlightValue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
