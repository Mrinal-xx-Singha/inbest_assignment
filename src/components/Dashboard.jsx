import React from "react";
import Navbar from "./Navbar";
import DashboardCard from "./dashboard/DashboardCard";
import { dashboardCardsData } from "../constants/dashboardCarddata";

import CompanyTabs from "./dashboard/CompanyTabs";
import PayrollByDepartment from "./dashboard/charts/PayrollByDepartment";
import DeptAttendance from "./dashboard/charts/DeptAttendance";
import PendingOnboarding from "./dashboard/charts/PendingOnboarding";
import TotalPayroll from "./dashboard/charts/TotalPayroll";
import YearlyPayroll from "./dashboard/charts/YearlyPayroll";
import EmployeeTable from "./dashboard/EmployeeTable";

const Dashboard = () => {
  return (
    <div className="flex-1 min-h-screen bg-[#F6F8FA]">
      <Navbar />
      <div className=" px-6 mt-6">
        <h2 className="font-inter font-normal text-[18px] leading-[1.2]">
          Dashboard
        </h2>
        {/* Dashboard Cards */}
        <div className="grid grid-cols-4 gap-5 mt-6">
          {dashboardCardsData.map((card, index) => (
            <DashboardCard key={index} {...card} />
          ))}
        </div>
        {/* Company Filter Tabs */}
        <div className="mt-6">
          <CompanyTabs />
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-6 mt-6 p-2">
        <PayrollByDepartment />
        <DeptAttendance />
        <PendingOnboarding />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6 p-2 mb-6">
        <TotalPayroll />
        <YearlyPayroll />
      </div>

      {/* Employee Overview Table */}
      <div className="p-2 mb-10">
        <EmployeeTable />
      </div>
      <p className="text-[#989898] font-inter font-medium text-[19.61px]">
        Copyright © 2025 Inbest.
      </p>
    </div>
  );
};

export default Dashboard;
