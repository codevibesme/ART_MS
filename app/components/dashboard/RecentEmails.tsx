import { Email } from "@/app/types/types";
import React from "react";
import { Table } from "antd";
import type { ColumnType } from "antd/es/table";
import Link from "next/link";

const columns: ColumnType<Email>[] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Email",
    dataIndex: "owner_email",
    key: "email",
  },
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
  },
  {
    title: "Body",
    dataIndex: "body",
    key: "body",
  },
  {
    title: "Date",
    dataIndex: "timestamp",
    key: "date",
  },
];
const RecentEmails = ({ emails }: { emails: Email[] }) => {
  //   console.log(emails);
  return (
    <div className="z-10 w-full h-fit shadow-md shadow-gray-300 rounded-lg p-4 mb-6 border pb-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl ">Recent emails</h1>
        <Link
          href={"/dashboard/emails"}
          className="text-lg font-extralight hover:underline hover:text-green-800 hover:font-normal cursor-pointer"
        >
          See all {"->"}
        </Link>
      </div>
      <Table
        columns={columns}
        dataSource={emails}
        pagination={false}
        rowKey="id"
      />
    </div>
  );
};
export default RecentEmails;
{
  /*<table className="border border-separate rounded-xl rounded-b-none">
        <thead>
          <tr>
            <th className="px-4 py-2 border-2 border-black rounded-tl-xl">
              ID
            </th>
            <th className="px-4 py-2 border-2 border-black  ">Email</th>
            <th className="px-4 py-2  border-2 border-black ">Subject</th>
            <th className="px-4 py-2  border-2 border-black ">Body</th>
            <th className="px-4 py-2  border-2 border-black rounded-tr-xl">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {emails.map((item, idx) => {
            return (
              <tr key={idx}>
                <td className="px-4 py-2 border border-black">{item.id}</td>
                <td className="px-4 py-2 border border-black">
                  {item.tenant_email ? item.tenant_email : item.owner_email}
                </td>
                <td className="px-4 py-2 border border-black">
                  {item.subject?.slice(0, 20)}...
                </td>
                <td className="px-4 py-2 border border-black">
                  {item.body?.slice(0, 20)}...
                </td>
                <td className="px-4 py-2 border border-black">
                  {item.timestamp
                    ? new Intl.DateTimeFormat("en-US").format(
                        Date.parse(item.timestamp)
                      )
                    : "NA"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>*/
}
