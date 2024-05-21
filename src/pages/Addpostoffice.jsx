function Addpostoffice() {
  return (
    <>
      <></>
      <a href="" className="dashlink">
        &lt; Back to Dashboard
      </a>
      <div
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
            Add Post Office
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
                  <label htmlFor="value">Enter Post Office Name</label>
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
                  <label htmlFor="value">Enter Main-Post Office Name</label>
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
                  <label htmlFor="value">Enter Hub Office Name</label>
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
                    <option value="express">CHENNAI</option>
                    <option value="standard">MADURAI</option>
                    <option value="standard">THANJAVUR</option>
                    <option value="standard">RAMANATHAPURAM</option>
                    <option value="standard">SALEM</option>
                    <option value="standard">TRICHY</option>
                    <option value="standard">COIMBATORE</option>
                    <option value="standard">TIRUNELVELI</option>
                    <option value="standard">VILLUPURAM</option>
                    <option value="standard">VELLORE</option>
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
                  <label htmlFor="value">Enter Phone Number</label>
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
                  <label htmlFor="value">Enter PIN CODE</label>
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
            // padding: " 30px",
          }}
        >
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
            Add
          </button>
        </div>
      </div>
      <div
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
            Delete a Post Office
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
                  <label htmlFor="value">Enter Post Office ID</label>
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
              margin: "10px",
              width: "80px",
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <></>
    </>
  );
}
export default Addpostoffice;
