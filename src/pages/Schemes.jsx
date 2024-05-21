import { useState, useEffect } from "react";
import { AiFillFilePdf } from "react-icons/ai";
import { FaHandPointRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config";

const Schemes = () => {
  const [schemeDetails, setSchemeDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchemeDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/scheme/list`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message);
        }

        setSchemeDetails(result.data);
        toast.success(result.message);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSchemeDetails();
  }, []);

  if (loading) {
    return <div className="text-center text-2xl">Loading...</div>;
  }

  return (
    <div className="container">
      {schemeDetails.map((item) => (
        <div key={item.scheme_id} className="scheme-detail flex border-2 gap-8 p-2 my-2 items-center shadow-lg hover:scale-105">
          <p className="border-2 p-2">{item.scheme_id}</p>
          <p className="text-base">{item.scheme_details}</p>
          <p className="flex items-center">
            For more information <FaHandPointRight className="text-[100px] md:text-[30px] text-center animate-bounce1" />
          </p>
          <a href={item.pdf_link} target="_blank" rel="noopener noreferrer" className="hover:scale-125">
            <AiFillFilePdf className="text-red-700" />
          </a>
          <a href={item.pdf_link} target="_blank" rel="noopener noreferrer" className="animate-pulse font-medium">
            PDF Link
          </a>
        </div>
      ))}
    </div>
  );
};

export default Schemes;
