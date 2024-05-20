import "./Postoffice.css";

function Hubdashboard() {
  let parcelsSent = 3;
  let parcelsReceived = 2;
  let HubName = "Guindy";
  let HubId = 2323;
  let HubPincode = 600012;
  console.log("NaandhaandaQ!");

  return (
    <>
      <span id="dashboard">Dashboard</span>
      <div className="dashboard">
        <div>
          <div className="large">{parcelsSent}</div>TOTAL SENT PARCELS
        </div>
        <div>
          <div className="large">{parcelsReceived}</div>TOTAL RECEIVED PARCELS
        </div>
      </div>
      <div>
        <table id="dashtable">
          <tbody>
            <tr>
              <td>Hub Id</td>
              <td>{HubId}</td>
            </tr>
            <tr>
              <td>Hub Name</td>
              <td>{HubName}</td>
            </tr>
            <tr>
              <td>Hub Pincode</td>
              <td>{HubPincode}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="cards">
        <div>
          <img src="src\assets\update.png" alt="" />
          Parcel Update
        </div>
        <div>
          <img src="src\assets\History.png" alt="" />
          History
        </div>
      </div>
    </>
  );
}

// export default fun1;
export default Hubdashboard;
