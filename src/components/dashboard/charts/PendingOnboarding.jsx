import React from "react";
import { Bar } from "react-chartjs-2";
import "../../../utils/chartSetup";

const PendingOnboarding = () => {
  const data = {
    labels: ["Employee", "Employee"],
    datasets: [
      {
        data: [6, 4],
        backgroundColor: ["#0975AE", "#CDE0EA"],
        borderRadius: 8,
        barThickness: 64,
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
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#191D1D",
          font: {
            size: 12,
          },
        },
        display: true,
        beginAtZero: true,
        suggestedMax: 10,
      },
    },
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-inter font-medium text-[18px] text-[#191D1D]">
          Pending Onboarding
        </h3>

        <select className="border border-blue-500 text-blue-600 text-sm  px-3 py-1 rounded-md">
          <option>Month</option>
        </select>
      </div>

      {/* Chart */}
      <div className="relative h-[160px]">
        <Bar data={data} options={options} />
      </div>

      {/* Button for pending onboarding */}
      <button className="mt-4 bg-[#0A3DAF] text-white text-sm font-medium self-end px-3 py-1 rounded-md cursor-pointer">
        VIEW ALL PENDING ON BOARDING →
      </button>
    </div>
  );
};

export default PendingOnboarding;
