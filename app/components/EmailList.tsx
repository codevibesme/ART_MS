"use client";
import React, { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Email } from "../types/types";
import { Table, Button, Input, Space } from "antd";
import type { InputRef } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import { IoSearchOutline } from "react-icons/io5";

const EmailList = ({ emails }: { emails: Email[] }) => {
  type EmailIndex = keyof Email;
  //   console.log(emails);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setReload(true);
  }, []);
  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: EmailIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex: EmailIndex): ColumnType<Email> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<IoSearchOutline />}
            size="small"
            style={{ width: 90, backgroundColor: "#3559E0" }}
          >
            Search
          </Button>
          {/* <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button> */}
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <IoSearchOutline style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns: ColumnsType<Email> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      ...getColumnSearchProps("id"),
      sorter: (a: any, b: any) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Email",
      dataIndex: "owner_email",
      key: "email",
      ...getColumnSearchProps("owner_email"),
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      ...getColumnSearchProps("subject"),
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
      ...getColumnSearchProps("body"),
    },
    {
      title: "Date",
      dataIndex: "timestamp",
      key: "date",
      ...getColumnSearchProps("timestamp"),
    },
  ];
  return (
    <>
      {reload && (
        <div className="w-full h-screen overflow-y-auto">
          <button
            className="text border border-gray-200 rounded-md hover:border-black p-1 mb-6"
            onClick={() => window.location.reload()}
          >
            Rest Filters
          </button>

          <Table columns={columns} dataSource={emails} rowKey="id" />
        </div>
      )}
    </>
  );
};

export default EmailList;
