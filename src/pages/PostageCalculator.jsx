import { useState } from "react";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

const PostageCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const [formData, setFormData] = useState({
    weight: 0,
    type: "",
  });

  const handleFormDataChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg(""); // Clear previous message
    try {
      const res = await fetch(`${BASE_URL}/customer/price-calc`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setMsg(message);
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="container mt-8">
      <h2
        className="text-center font-semibold text-3xl"
        style={{ fontFamily: "PT Sans" }}
      >
        Postage Amount Calculator
      </h2>
      <div className="w-full mt-4 p-4 border-2 flex flex-col">
        <div className="border-2 w-full h-1/2">
          <form
            onSubmit={handleSubmit}
            className="p-4 border-2 m-4 gap-5 flex flex-col md:flex-row justify-center items-center"
          >
            <div className="flex gap-2 items-center w-1/2 justify-center">
              <h2 className="text-lg md:text-2xl font-medium">Weight:</h2>
              <input
                type="number"
                name="weight"
                placeholder="Enter the Weight"
                className="mx-1 p-2 min-w-[70px] rounded-lg"
                value={formData.weight}
                onChange={handleFormDataChange}
              />
            </div>
            <div className="flex gap-7 items-center justify-center w-1/2">
              <h2 className="text-lg md:text-2xl font-medium">Type:</h2>
              <select
                name="type"
                value={formData.type}
                onChange={handleFormDataChange}
                className="px-4 py-2 rounded-lg"
              >
                <option value="select">select</option>
                <option value="express">Express</option>
                <option value="standard">Standard</option>
              </select>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 rounded-lg text-white"
            >
              Calculate
            </button>
          </form>
        </div>
        <div className="border-2 w-full p-4 m-4">
          <div className="flex justify-center items-center gap-2">
            {loading ? (
              <HashLoader size={35} className="bg-green-500" />
            ) : (
              <h2 className="md:text-2xl text-black">{msg}</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostageCalculator;
