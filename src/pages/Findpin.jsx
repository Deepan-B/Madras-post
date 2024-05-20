import React, { useState, useMemo } from "react";

import fakeData from "../toLearn/data.json";
import { useTable } from "react-table";
// import header from "../components/Header";
import "./table.css";

const Findpin = () => {
  const obj1 = {
    Select: "Details",
    Hub: "Hub Name",
    pid: "Post Office Id",
    Main: "Main Post Office Name",
    Post: "Post Office Name",
    Phone: "Phone number",
  };

  const [svalue, setsvalue] = useState("Details");

  function updatestate(e) {
    setsvalue(obj1[e.target.value]);
  }

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
    {
      Header: "University",
      accessor: "university",
    },
  ];

  const columns = useMemo(() => columnss, []);

  const tableInst = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInst;

  return (
    <>
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
            Find Pin Code
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
                  <label htmlFor="ipType">Choose an option</label>
                </td>
                <td>
                  <select
                    name="ipType"
                    id="ipType"
                    onChange={updatestate}
                    style={{
                      border: "2px solid #e3e3e3",
                      width: "95%",
                      height: "28px",
                      borderRadius: "2px",
                    }}
                  >
                    <option value="Select">Select</option>
                    <option value="Hub">Hub Name</option>
                    <option value="pid">Post Office Id</option>
                    <option value="Main">Main Post Office</option>
                    <option value="Post">Post Office</option>
                    <option value="Phone">Phone Number</option>
                  </select>
                </td>
              </tr>
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
                  <label htmlFor="value">Enter {svalue}</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="value"
                    style={{
                      width: "95%",
                      height: "28px",
                      borderRadius: "2px",
                      border: "2px solid #e3e3e3",
                    }}
                  />
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
              padding: "5px 12px",
              borderRadius: "3px",
              // float: "right",
              margin: "10px",
              width: "80px",
            }}
          >
            Reset
          </button>
          <button
            style={{
              border: "2px solid #e3e3e3",
              backgroundColor: "#ffb1b1",
              padding: "5px 12px",
              borderRadius: "3px",
              margin: "10px",
              width: "80px",
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div class="datatable">
        <table {...getTableBodyProps()}>
          <thead class="thead">
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
};

export default Findpin;
