"use client";
import React, { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Tenant } from "../types/types";
import { Table, Button, Input, Space } from "antd";
import type { InputRef } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import { IoSearchOutline } from "react-icons/io5";
import { useDashContext } from "../contexts/dashContext/DashContext";

const TenantList = ({ tenants }: { tenants: Tenant[] }) => {
  type TenantIndex = keyof Tenant;
  const { setMenu } = useDashContext();
  //   console.log(emails);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setReload(true);
    setMenu({ id: 2, name: "Tenants" });
  }, []);
  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: TenantIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: TenantIndex
  ): ColumnType<Tenant> => ({
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
    onFilter: (value, record) => {
      const dataIndexValue = record[dataIndex];
      return (
        dataIndexValue !== undefined &&
        dataIndexValue
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase())
      );
    },
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
  const columns: ColumnsType<Tenant> = [
    {
      title: "Tenant ID",
      dataIndex: "tenant_ref",
      key: "tenantID",
      ...getColumnSearchProps("tenant_ref"),
    },
    {
      title: "Tenant Name",
      dataIndex: "tenant_name",
      key: "tenantName",
      ...getColumnSearchProps("tenant_name"),
    },
    {
      title: "Owner Name",
      dataIndex: "owner_name",
      key: "ownerName",
      ...getColumnSearchProps("owner_name"),
    },
    {
      title: "Address",
      dataIndex: "property_desc",
      key: "address",
      ...getColumnSearchProps("property_desc"),
    },
    {
      title: "Rent (in Rs.)",
      dataIndex: "transaction_nett",
      key: "rent",
      ...getColumnSearchProps("transaction_nett"),
    },
    {
      title: "Due Date",
      dataIndex: "transaction_due_date",
      key: "date",
      ...getColumnSearchProps("transaction_due_date"),
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

          <Table columns={columns} dataSource={tenants} rowKey="id" />
        </div>
      )}
    </>
  );
};

export default TenantList;
