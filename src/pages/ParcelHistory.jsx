import React, { useState, useMemo } from "react";
import fakeData from "../toLearn/data.json";
import { useTable } from "react-table";

function ParcelHistory() {
  const data = useMemo(() => fakeData, []);

  const columnss = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "First Name",
      accessor: "first_name",
    },
    {
      Header: "last Name",
      accessor: "last_name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
  ];

  const columns = useMemo(() => columnss, []);

  const tableInst = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInst;

  return (
    <>
      <a href="" className="dashlink">
        &lt; Back to Dashboard
      </a>
      <div
        name="findingform"
        style={{
          borderRadius: "5px",
          width: "50%",
          maxWidth: "750px",
          minWidth: "550px",
          background: "#f5f5f5",
          margin: "80px auto 100px auto ",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              lineHeight: "50px",
            }}
          >
            Show History
          </span>
        </div>
        <div
          style={{
            borderRadius: "5px",
            border: "2px solid #e3e3e3",
            width: "80%",
            backgroundColor: "#e3e3e3",
            margin: "0 auto 20px auto",
          }}
        >
          <table
            style={{
              width: "100%",
            }}
          >
            <tbody>
              <tr
                style={{
                  height: "50px",
                }}
              >
                <td
                  style={{
                    padding: "0 0 0 10px",
                    width: "50%",
                  }}
                >
                  <label htmlFor="ipType">Type</label>
                </td>
                <td>
                  <select
                    name="ipType"
                    id="ipType"
                    style={{
                      border: "2px solid #e3e3e3",
                      width: "95%",
                      height: "28px",
                      borderRadius: "2px",
                    }}
                  >
                    <option value="Select">Select</option>
                    <option value="szent">Sent</option>
                    <option value="received">Received</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <button
            style={{
              border: "2px solid #e3e3e3",
              backgroundColor: "#ffb1b1",
              padding: "5px 5px",
              borderRadius: "3px",
              margin: "10px",
              width: "80px",
            }}
          >
            Show
          </button>
        </div>
      </div>

      <div className="datatable">
        <table {...getTableBodyProps()}>
          <thead className="thead">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ParcelHistory;
