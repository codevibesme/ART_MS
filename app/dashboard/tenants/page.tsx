import { getAllTenants } from "@/app/api";
import TenantList from "@/app/components/TenantList";
import React from "react";

const TenantPage = async () => {
  const allTenants = await getAllTenants();
  return (
    <div className="w-full h-full flex flex-col">
      <TenantList tenants={allTenants} />
    </div>
  );
};

export default TenantPage;
