import  { useState, useEffect } from "react";
import { BASE_URL } from "../../config.js";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

const Stamps = () => {
  const [loading, setLoading] = useState(true);
  const [stampdetails, setStampdetails] = useState([]);

  useEffect(() => {
    const fetchStamps = async () => {
      try {
        const res = await fetch(`${BASE_URL}/stamps/list`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await res.json();
        setStampdetails(result.data);
        console.log(result.data);
        if (!res.ok) {
          throw new Error(result.message);
        }

        setLoading(false);
        toast.success(result.message);
      } catch (err) {
        toast.error(err.message);
        setLoading(false);
      }
    };

    fetchStamps();
  }, []);

  return loading ? (
    <HashLoader size={50} color={"#36d7b7"} loading={loading} />
  ) : (
    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {stampdetails.map((value, index) => (
        <div className="max-w-xs rounded overflow-hidden shadow-lg" key={index}>
          <img
            className="m-4"
            src={value.description}
            alt={`Stamp ${value.stamp_id}`}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Stamp ID: {value.stamp_id}
            </div>
            <p className="text-gray-700 text-base">
              Issue Date: {value.issue_date.slice(0,10)}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #stamps
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #india
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #postage
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stamps;
