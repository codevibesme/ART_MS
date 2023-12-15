"use client";
import { useEffect, useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import {
  IoMailSharp,
  IoPersonSharp,
  IoSettingsSharp,
  IoHelpCircleSharp,
} from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
const mainMenu: string[] = ["Dashboard", "Emails", "Tenants"];
const settingsMenu: string[] = ["Profile", "Settings", "Help"];
const DashNav: React.FC = () => {
  const [main, setMain] = useState<number>(-1);

  useEffect(() => {
    let local: { item: number } | string | null;
    local = localStorage.getItem("main");
    local ? setMain(JSON.parse(local).item) : setMain(0);
  }, []);
  useEffect(() => {
    if (main !== -1) {
      const item = JSON.stringify({ item: main });
      localStorage.setItem("main", item);
    }
  }, [main]);

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
          onClick={() => setMain(idx)}
        >
          {idx === 0 && (
            <BiSolidDashboard className="text-2xl p-1 bg-gray-700 rounded-md text-white" />
          )}
          {idx === 1 && (
            <IoMailSharp className="text-2xl p-1 bg-gray-700 rounded-md text-white" />
          )}
          {idx === 2 && (
            <RiTeamFill className="text-2xl p-1 bg-gray-700 rounded-md text-white" />
          )}
          <p className="text-lg ms-2">{item}</p>
        </div>
      ))}
      <h1 className="font-thin text-md tracking-widest mb-4">Settings</h1>
      {settingsMenu.map((item, idx) => (
        <div
          key={idx}
          className="flex w-full h-fit items-center rounded-lg mb-2 hover:bg-gray-200 hover:text-black p-2 group cursor-pointer transition-transform duration-75"
        >
          {idx === 0 && (
            <IoPersonSharp className="text-2xl p-1 bg-gray-700 rounded-md text-white" />
          )}
          {idx === 1 && (
            <IoSettingsSharp className="text-2xl p-1 bg-gray-700 rounded-md text-white" />
          )}
          {idx === 2 && (
            <IoHelpCircleSharp className="text-2xl p-1 bg-gray-700 rounded-md text-white" />
          )}
          <p className="text-lg ms-2">{item}</p>
        </div>
      ))}
    </div>
  );
};
export default DashNav;
