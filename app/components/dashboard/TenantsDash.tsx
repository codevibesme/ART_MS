import { Tenant } from "@/app/types/types";
import React from "react";
import { Table } from "antd";
import type { ColumnType } from "antd/es/table";
import Link from "next/link";
const columns: ColumnType<Tenant>[] = [
  {
    title: "Tenant ID",
    dataIndex: "tenant_ref",
    key: "tenantID",
  },
  {
    title: "Tenant Name",
    dataIndex: "tenant_name",
    key: "tenantName",
  },
  {
    title: "Owner Name",
    dataIndex: "owner_name",
    key: "ownerName",
  },
  {
    title: "Address",
    dataIndex: "property_desc",
    key: "address",
  },
  {
    title: "Rent (in Rs.)",
    dataIndex: "transaction_nett",
    key: "rent",
  },
  {
    title: "Due Date",
    dataIndex: "transaction_due_date",
    key: "date",
  },
];
const TenantsDash = ({ tenants }: { tenants: Tenant[] }) => {
  return (
    <div className="z-10 w-full h-fit shadow-md shadow-gray-300 rounded-lg p-4 border pb-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl ">Tenants</h1>
        <Link
          href={"/dashboard/tenants"}
          className="text-lg font-extralight hover:underline hover:text-green-800 hover:font-normal cursor-pointer"
        >
          See all {"->"}
        </Link>
      </div>
      <Table
        columns={columns}
        dataSource={tenants}
        pagination={false}
        rowKey="id"
      />
    </div>
  );
};

export default TenantsDash;
