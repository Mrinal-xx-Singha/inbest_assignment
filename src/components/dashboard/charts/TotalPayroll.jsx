import React from "react";
import { Line } from "react-chartjs-2";
import "../../../utils/chartSetup";

const TotalPayroll = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Payroll",
        data: [1.5, 3.0, 5.8, 3.9, 4.2, 7.9],
        borderColor: "#6F4685",
        backgroundColor: "#6F4685",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
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
          label: (context) => `Payroll: ${context.parsed.y} L`,
        },
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
        min: 0,
        max: 10,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 2,
          color: "#6B7280",
          font: {
            size: 12,
          },
          callback: (value) => `${value} L`,
        },
      },
    },
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-inter font-medium text-[28px] text-[#191D1D]">
          Total Payroll by Month
        </h3>
      </div>

      {/* Chart */}
      <div className="relative h-[280px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TotalPayroll;
