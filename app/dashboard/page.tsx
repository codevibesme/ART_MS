import React from "react";
import RecentEmails from "../components/dashboard/RecentEmails";
import TenantsDash from "../components/dashboard/TenantsDash";
import { getDashEmails, getDashTenants } from "../api";

const Dashboard: React.FC = async () => {
  const [emails, tenants] = await Promise.all([
    getDashEmails(),
    getDashTenants(),
  ]);

  return (
    <div className="w-full h-full flex flex-col">
      <RecentEmails emails={emails} />
      <TenantsDash tenants={tenants} />
    </div>
  );
};

export default Dashboard;
