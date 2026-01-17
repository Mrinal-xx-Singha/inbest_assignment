import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
const App = () => {
  return (
    <div className="flex font-inter">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
