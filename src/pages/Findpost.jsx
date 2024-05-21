import { useState, useMemo } from "react";
import { toast } from "react-toastify";
import { useTable } from "react-table";
import { BASE_URL } from "../../config";
import "./table.css";
import { HashLoader } from "react-spinners";

const Findpost = () => {
  let vari ;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ key: "", value: "" });


  const makenull = () => {
    setFormData({ key: "", value: "" });
  };

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const res = await fetch(`${BASE_URL}/post-office/find`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
  
      // Assuming your API response data is an array of objects, you can directly set it to state
      setData(result.data);
      vari = result.data
      console.log(data);
      setLoading(false);
      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };
  
  const columnss = useMemo(
    () => [
      {
        Header: "Phone Number",
        accessor: "phone_no",
      },
    ],
    []
  );

  const columns = useMemo(() => columnss, []);
  const tableInst = useTable({ columns, vari });

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
          margin: "80px auto 100px auto",
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
            Locate Post Office
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
                  <label htmlFor="key">Choose an option</label>
                </td>
                <td>
                  <select
                    name="key"
                    id="key"
                    value={formData.key}
                    onChange={handleFormDataChange}
                    style={{
                      border: "2px solid #e3e3e3",
                      width: "95%",
                      height: "28px",
                      borderRadius: "2px",
                    }}
                  >
                    <option value="Select">Select</option>
                    <option value="main_post">Hub Name</option>
                    <option value="post_office_id">Post Office Id</option>
                    <option value="main_post">Main Post Office</option>
                    <option value="sub_post">Sub Post Office</option>
                    <option value="phone_no">Phone Number</option>
                    <option value="pincode">Pin Code</option>
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
                  <label htmlFor="value">Enter {formData.key}</label>
                </td>
                <td>
                  <input
                    name="value"
                    value={formData.value}
                    onChange={handleFormDataChange}
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
            onClick={makenull}
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
      {loading ? (
        <div className="loader">
          <HashLoader size={50} color={"#36d7b7"} loading={loading} />
        </div>
      ) : (
        <div className="datatable">
          <table {...getTableProps()}>
            <thead className="thead">
              {headerGroups.map((headerGroup, index) => (
                <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    <th key={index} {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, index) => {
                prepareRow(row);
                return (
                  <tr key={index} {...row.getRowProps()}>
                    {row.cells.map((cell, index) => {
                      return (
                        <td key={index} {...cell.getCellProps()}>
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
      )}
    </>
  );
};

export default Findpost;
