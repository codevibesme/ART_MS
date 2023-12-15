import React from "react";
import DashNav from "../DashNav";
import DashHeader from "./DashHeader";
const DashContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#323232] w-full h-screen overflow-y-auto flex p-4">
      <DashNav />
      <div className="bg-white p-4 w-full h-full flex flex-col rounded-xl overflow-y-auto">
        <DashHeader />
        {children}
      </div>
    </div>
  );
};
export default DashContainer;
