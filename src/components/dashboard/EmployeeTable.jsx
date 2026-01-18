import React from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { employees } from "../../constants/employee";

const EmployeeTable = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6 mb-10 pb-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-inter font-bold text-[28px] text-[#191D1D]">
          Employee Overview
        </h3>

        {/* Search Bar */}
        <div className="relative w-[300px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#191D1D] w-4 h-4" />
          <input
            type="text"
            placeholder="Search here"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm text-[#191D1D] focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 text-left">
              <th className="py-4 px-4 font-inter font-bold text-[13px] text-[#191D1D]">
                Profile
              </th>
              <th className="py-4 px-4 font-inter font-bold text-[13px] text-[#191D1D]">
                Employee Code
              </th>
              <th className="py-4 px-4 font-inter font-bold text-[13px] text-[#191D1D]">
                Employee Name
              </th>
              <th className="py-4 px-4 font-inter font-bold text-[13px] text-[#191D1D]">
                Department
              </th>
              <th className="py-4 px-4 font-inter font-bold text-[13px] text-[#191D1D]">
                Designation
              </th>
              <th className="py-4 px-4 font-inter font-bold text-[13px] text-[#191D1D]">
                Company
              </th>
              <th className="py-4 px-4 font-inter font-bold text-[13px] text-[#191D1D] text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr
                key={index}
                className="border-b border-gray-50 hover:bg-gray-50"
              >
                <td className="py-3 px-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    {/* Placeholder logic if image is missing */}
                    <img
                      src={emp.image}
                      alt={emp.name}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentNode.style.backgroundColor = "#165BAA";
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-[#4A4D56] font-inter">
                  {emp.code}
                </td>
                <td className="py-3 px-4 text-sm text-[#4A4D56] font-inter">
                  {emp.name}
                </td>
                <td className="py-3 px-4 text-sm text-[#4A4D56] font-inter">
                  {emp.department}
                </td>
                <td className="py-3 px-4 text-sm text-[#4A4D56] font-inter">
                  {emp.designation}
                </td>
                <td className="py-3 px-4 text-sm text-[#4A4D56] font-inter">
                  {emp.company}
                </td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[12px] font-medium text-white ${
                      emp.status === "Permanent"
                        ? "bg-[#039547]"
                        : "bg-[#F97706]"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <div className="flex gap-2 justify-center w-full">
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#F3F4F6] text-gray-400">
            <ChevronLeft size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0A3DAF] text-white text-sm font-medium">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white border border-gray-200 text-gray-600 text-sm hover:bg-gray-50">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white border border-gray-200 text-gray-600 text-sm hover:bg-gray-50">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white border border-gray-200 text-gray-600 text-sm hover:bg-gray-50">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
