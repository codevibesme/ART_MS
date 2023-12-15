import React from "react";

const ProfileHeader = () => {
  return (
    <div className="flex  w-full justify-between items-center min-h-fit mb-8 cursor-default">
      <h1 className="font-semibold text-2xl">Dashboard</h1>
      <div className="flex items-center">
        <div className="rounded-full min-h-fit w-fit me-1">
          <img
            src="/demoProf.png"
            className="rounded-full overflow-clip h-12 w-12"
            alt="logo"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Sammy Layne</h1>
          <p className="text-md font-normal tracking-widest text-gray-500">
            Admin
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
