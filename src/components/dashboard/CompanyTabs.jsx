import React, { useState } from "react";

const companies = ["ALL", "BILLP", "BSIBPL", "Baid & Company"];

const CompanyTabs = ({ onChange }) => {
  const [active, setActive] = useState("ALL");

  const handleClick = (company) => {
    setActive(company);
    onChange?.(company);
  };

  return (
    <div className="w-full bg-[#EDF3FE] rounded-lg px-4 py-3 flex gap-3">
      {companies.map((company) => {
        const isActive = active === company;

        return (
          <button
            key={company}
            onClick={() => handleClick(company)}
            className={`font-inter text-[14px] px-4 py-1.5 rounded-md transition ${
              isActive
                ? "bg-[#0A3DAF] text-white font-medium"
                : "text-[#0A3DAF] hover:bg-[#0A3DAF]/10"
            }`}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default CompanyTabs;
