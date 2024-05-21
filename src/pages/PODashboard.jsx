import "./Postoffice.css";
import history from "../assets/history.png";
import transaction from "../assets/transaction.png";
import update from "../assets/update.png";
import { BASE_URL } from "../../config";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/AuthContext";

const PODashboard = () => {
  let parcelsSent;
  let parcelsReceived = 2;
  let postOfficeName = "Guindy";
  let postOfficeId = 2323;
  let postOfficePincode = 600012;
  const [ans1, setans1] = useState(0);

  const { user } = useContext(authContext);
  console.log(user.id);

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const response = await fetch(`${BASE_URL}/post-office/received`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ post_office_id: 41 }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        parcelsSent = await response.json();
        setans1(parcelsSent.parcelIds.length);

        console.log(parcelsSent.parcelIds.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchParcels();
  }, []);

  // const backcall = async() => {

  // try {
  //     const res = await fetch(`${BASE_URL}/post-office/id_finder`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user.id),
  //     });

  // //   setFormData({
  // //     ...formData,
  // //     [e.target.name]: e.target.value,
  // //   });
  // // };

  // // const submitHandler = async () => {
  // //   setLoading(true);
  //     const result = await res.json();
  //     if (!res.ok) {
  //       throw new Error(result.message);
  //     }

  //     // setData(result.data);
  //     // setLoading(false);
  //     // console.log(data);
  //     // toast.success(result.message);
  //   } catch (err) {
  //     // toast.error(err.message);
  //     // setLoading(false);
  //   }
  // };

  return (
    <>
      <span id="dashboard">Dashboard</span>
      <div className="dashboard">
        <div>
          <div className="large">{ans1}</div>TOTAL SENT PARCELS
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
          <img src={update} alt="update-img" />
          Update
        </div>
        <div>
          <img src={transaction} alt="transaction-img" />
          Transaction
        </div>
        <div>
          <img src={history} alt="history-img" />
          History
        </div>
      </div>
    </>
  );
};
export default PODashboard;
