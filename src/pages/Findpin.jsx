import { useState, useMemo } from "react";
import { useTable } from "react-table";
import { toast } from "react-toastify";
import "./table.css";
import { BASE_URL } from "../../config";
import { HashLoader } from "react-spinners";

const Findpin = () => {
  const [formData, setFormData] = useState({ ipType: "", value: "" });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/post-office/find`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }

      setData(result.data);
      setLoading(false);
      console.log(data);
      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  const resetHandler = () => {
    setFormData({ ipType: "", value: "" });
    setData([]);
  };

  const columns = useMemo(
    () => [
      {
        Header: "Pincode",
        accessor: "pincode", // Change this to match your data structure
      },
      {
        Header: "Post Office Id",
        accessor: "post_office_id", // Change this to match your data structure
      },
      {
        Header: "Main Post Office Name",
        accessor: "main_post", // Change this to match your data structure
      },
      {
        Header: "Post Office Name",
        accessor: "sub_post", // Change this to match your data structure
      },
      {
        Header: "Phone Number",
        accessor: "phone_no", // Change this to match your data structure
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

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
                    onChange={handleFormDataChange}
                    value={formData.ipType}
                    style={{
                      border: "2px solid #e3e3e3",
                      width: "95%",
                      height: "28px",
                      borderRadius: "2px",
                    }}
                  >
                    <option value="">Select</option>
                    <option value="post_office_id">Post Office Id</option>
                    <option value="main_post">Main Post Office</option>
                    <option value="sub_post">Post Office</option>
                    <option value="phone_no">Phone Number</option>
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
                  <label htmlFor="value">Enter {formData.ipType}</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="value"
                    onChange={handleFormDataChange}
                    value={formData.value}
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
            onClick={resetHandler}
            style={{
              border: "2px solid #e3e3e3",
              backgroundColor: "#ffb1b1",
              padding: "5px 12px",
              borderRadius: "3px",
              margin: "10px",
              width: "80px",
            }}
          >
            Reset
          </button>
          <button
            onClick={submitHandler}
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
      {data.length > 0 ? (
        <div className="datatable">
          <table {...getTableProps()}>
            <thead className="thead">
              {headerGroups.map((headerGroup, index) => (
                <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th key={Date.now()} {...column.getHeaderProps()}>
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
                  <tr key={Date.now()} {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td key={Date.now()} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <></>
        // <HashLoader />
      )}
    </>
  );
};

export default Findpin;
