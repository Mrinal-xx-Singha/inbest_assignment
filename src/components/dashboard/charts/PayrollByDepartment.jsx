import React from "react";
import { Doughnut } from "react-chartjs-2";
import "../../../utils/chartSetup";

const PayrollByDepartment = () => {
  const data = {
    labels: ["Marketing", "Development", "Designing", "Claim"],
    datasets: [
      {
        data: [30, 20, 15, 10],
        backgroundColor: ["#40A7DD", "#005887", "#CDE0EA", "#A3CBE0"],
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
        enabled: false,
      },
    },
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-inter font-medium text-[18px] text-[#191D1D]">
          Payroll by Department
        </h3>

        <select className="border border-blue-500 text-blue-600 text-sm rounded-md px-3 py-1">
          <option>Month</option>
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

        {/* Legend */}
        <div className="ml-8 flex flex-col gap-3 text-sm">
          <LegendItem color="#FFCA76" label="Marketing" />
          <LegendItem color="#FFA20C" label="Development" />
          <LegendItem color="#FFA20C" label="Designing" />
          <LegendItem color="#7DD2B7" label="Claim" />
        </div>
      </div>
    </div>
  );
};

const LegendItem = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <span
      className="w-2.5 h-2.5 rounded-full"
      style={{ backgroundColor: color }}
    />
    <span className="text-gray-700">{label}</span>
  </div>
);

export default PayrollByDepartment;
