import "./Postoffice.css";

const PODashboard = () => {
  let parcelsSent = 3;
  let parcelsReceived = 2;
  let postOfficeName = "Guindy";
  let postOfficeId = 2323;
  let postOfficePincode = 600012;

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
              <td>Post Office Id</td>
              <td>{postOfficeId}</td>
            </tr>
            <tr>
              <td>Post Office Name</td>
              <td>{postOfficeName}</td>
            </tr>
            <tr>
              <td>Post Office Pincode</td>
              <td>{postOfficePincode}</td>
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
          <img src="src\assets\transaction.png" alt="" />
          Transaction
        </div>
        <div>
          <img src="src\assets\History.png" alt="" />
          History
        </div>
      </div>
    </>
  );
};
export default PODashboard;
