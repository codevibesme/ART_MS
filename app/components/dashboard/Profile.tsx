"use client";
import { useAuthContext } from "@/app/contexts/authContext/AuthContext";
import { useDashContext } from "@/app/contexts/dashContext/DashContext";
import { setUser } from "@/app/libs/features/auth/authSlice";
import { User } from "@/app/types/types";
import React, { useEffect } from "react";

const ProfileHeader = () => {
  // const user = useSelector((state: any) => state.auth.user);
  // console.log(user);
  const { menu } = useDashContext();
  const { user, setUser } = useAuthContext();
  useEffect(() => {
    const item: string | null = localStorage.getItem("user");
    if (item) {
      const newUser: { email: string } = JSON.parse(item);
      setUser({ ...user, name: newUser.email });
    }
  }, []);
  return (
    <div className="flex  w-full justify-between items-center min-h-fit mb-8 cursor-default">
      {user?.name ? (
        <>
          <h1 className="font-semibold text-2xl">{menu.name}</h1>
          <div className="flex items-center">
            <div className="rounded-full min-h-fit w-fit me-1">
              <img
                src="/demoProf.png"
                className="rounded-full overflow-clip h-12 w-12"
                alt="logo"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">{user?.name}</h1>
              <p className="text-md font-normal tracking-widest text-gray-500">
                Admin
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="h-12"></div>
      )}
    </div>
  );
};

export default ProfileHeader;
