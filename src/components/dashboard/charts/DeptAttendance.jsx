import React from "react";
import { Doughnut } from "react-chartjs-2";
import "../../../utils/chartSetup";

const DeptAttendance = () => {
  const data = {
    datasets: [
      {
        data: [60, 20],
        backgroundColor: [
          "#E9A40C", // Present
          "#E9A40C4D", // Absent
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "75%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-inter font-medium text-[18px] text-[#191D1D]">
          Dept Attendance
        </h3>

        <select className="border border-blue-500 text-blue-600 text-sm  px-3 py-1 rounded-md">
          <option>UI/UX</option>
        </select>
      </div>

      {/* Content */}
      <div className="flex items-center">
        {/* Doughnut */}
        <div className="relative w-[160px] h-[160px]">
          <Doughnut data={data} options={options} />

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-inter font-semibold text-[20px] text-gray-900">
              80
            </p>
            <p className="text-[12px] text-gray-500">Employees</p>
          </div>
        </div>

        {/* Right-side Summary */}
        <div className="ml-8 flex flex-col gap-4 text-sm">
          <div>
            <p className="font-medium text-[#E9A40C]">Present Employees</p>
            <p className="text-gray-700">60 Emp</p>
          </div>

          <div>
            <p className="font-medium text-[#E9A40C4D]">Absent Employees</p>
            <p className="text-gray-700">20 Emp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeptAttendance;
