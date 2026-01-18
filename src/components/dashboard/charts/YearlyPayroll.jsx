import React from "react";
import { Line } from "react-chartjs-2";
import "../../../utils/chartSetup";

const YearlyPayroll = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "2026",
        data: [200, 300, 240, 350, 400, 200, 250, 600, 315, 700, 750, 950],
        borderColor: "#1792D3",
        backgroundColor: "rgba(22, 91, 170, 0.12)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "2025",
        data: [150, 200, 300, 290, 260, 295, 270, 500, 400, 350, 450, 550],
        borderColor: "#979797",
        borderWidth: 1.5,
        pointRadius: 0,
        fill: false,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (ctx) => `₹${ctx.parsed.y}K`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
          color: "#9CA3AF",
          font: { size: 11 },
        },
      },
      y: {
        grid: {
          color: "#F3F4F6",
          drawBorder: false,
        },
        ticks: {
          color: "#9CA3AF",
          font: { size: 11 },
          callback: (val) => `₹${val}K`,
        },
      },
    },
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-inter font-medium text-[28px] text-[#191D1D]">
          Yearly Payroll Analysis
        </h3>

        <select className="border border-blue-500 text-blue-600 text-sm rounded px-3 py-1">
          <option>2026</option>
        </select>
      </div>

      {/* Inline Legend */}
      <div className="  flex justify-center items-center gap-6 text-[12px] mb-3">
        <p className="text-[#039547] text-[20px]">+12.4% YoY</p>
        <div className="flex flex-col gap-1 border border-[#B0C2E3] rounded-lg  p-3">
          <p className="text-[#191D1D] border-l-[#1792D3] border-l-3 pl-2 border-l-rounded">
            December 2026 <span className="text-[#FFA20C]">950k</span>
          </p>
          <p className="text-[#191D1D] border-l-[#979797] border-l-3 pl-2 border-l-rounded">
            December 2025 <span className="text-[#FFA20C]">550k</span>
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-[280px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default YearlyPayroll;
