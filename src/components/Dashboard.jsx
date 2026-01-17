import React from "react";
import Navbar from "./Navbar";
import DashboardCard from "./dashboard/DashboardCard";
import { dashboardCardsData } from "../constants/dashboardCarddata";

const Dashboard = () => {
  return (
    <div className="border border-black w-full h-screen">
      <Navbar />
      <div className=" px-6 mt-6">
        <h2 className="font-inter font-normal text-[18px] leading-[1.2]">
          Dashboard
        </h2>
        <div className="grid grid-cols-4 gap-5 mt-6">
          {dashboardCardsData.map((card, index) => (
            <DashboardCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
