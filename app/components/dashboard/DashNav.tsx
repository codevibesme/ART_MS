"use client";
import { setMenu } from "@/app/libs/features/dashboard/dashboardSlice";
import { RootState } from "@reduxjs/toolkit/query";
import { useEffect, useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import {
  IoMailSharp,
  IoPersonSharp,
  IoSettingsSharp,
  IoHelpCircleSharp,
} from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
const mainMenu: { name: string; ico: JSX.Element }[] = [
  {
    name: "Dashboard",
    ico: (
      <BiSolidDashboard className="text-2xl p-1 bg-gray-700 rounded-md text-white" />
    ),
  },
  {
    name: "Emails",
    ico: (
      <IoMailSharp className="text-2xl p-1 bg-gray-700 rounded-md text-white" />
    ),
  },
  {
    name: "Tenants",
    ico: (
      <RiTeamFill className="text-2xl p-1 bg-gray-700 rounded-md text-white" />
    ),
  },
];
const settingsMenu: { name: string; ico: JSX.Element }[] = [
  {
    name: "Profile",
    ico: (
      <IoPersonSharp className="text-2xl p-1 bg-gray-700 rounded-md text-white" />
    ),
  },
  {
    name: "Settings",
    ico: (
      <IoSettingsSharp className="text-2xl p-1 bg-gray-700 rounded-md text-white" />
    ),
  },
  {
    name: "Help",
    ico: (
      <IoHelpCircleSharp className="text-2xl p-1 bg-gray-700 rounded-md text-white" />
    ),
  },
];
const DashNav: React.FC = () => {
  const main = useSelector((state: any) => state.dash.menu);
  const dispatch = useDispatch();
  return (
    <div className="w-1/6 h-full flex flex-col text-white px-6 py-4">
      <div className="flex  w-full h-fit mb-10 items-center">
        <div className="rounded-full h-full w-fit me-4">
          <img
            src="/logo.png"
            className="rounded-full overflow-clip h-12 w-12"
            alt="logo"
          />
        </div>
        <h1 className="text-xl font-bold">ART</h1>
      </div>
      <h1 className="font-thin text-md tracking-widest mb-4">Main Menu</h1>
      {mainMenu.map((item, idx) => (
        <div
          key={idx}
          className={
            idx !== main
              ? "flex w-full h-fit items-center rounded-lg mb-2 hover:bg-gray-200 hover:text-black p-2 group cursor-pointer transition-transform duration-75"
              : "flex w-full h-fit items-center rounded-lg mb-2 p-2 group cursor-pointer transition-transform duration-75 bg-gray-200 text-black"
          }
          onClick={() => dispatch(setMenu(idx))}
        >
          {item.ico}
          <p className="text-lg ms-2">{item.name}</p>
        </div>
      ))}
      <h1 className="font-thin text-md tracking-widest mb-4">Settings</h1>
      {settingsMenu.map((item, idx) => (
        <div
          key={idx}
          onClick={() => dispatch(setMenu(idx + 3))}
          className={
            idx + 3 !== main
              ? "flex w-full h-fit items-center rounded-lg mb-2 hover:bg-gray-200 hover:text-black p-2 group cursor-pointer transition-transform duration-75"
              : "flex w-full h-fit items-center rounded-lg mb-2 p-2 group cursor-pointer transition-transform duration-75 bg-gray-200 text-black"
          }
        >
          {item.ico}
          <p className="text-lg ms-2">{item.name}</p>
        </div>
      ))}
    </div>
  );
};
export default DashNav;
