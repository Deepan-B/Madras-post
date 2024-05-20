import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import regimg from "../../src/assets/register.jpeg";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone_no: 0,
    address: "",
    type: "user"
  });

  const navigate = useNavigate();

  const handleFormDataChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      console.log(res);

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
      <div className="w-full mx-auto">
        <div>
          <h3 className="text-4xl leading-9 font-bold my-4 text-center">
            Create an <span className="text-primaryColor">account</span>
          </h3>
          <div className="flex justify-evenly items-center w-full">
            <div className=" ml-4 w-2/5 h-2/5 hidden md:flex md:items-center md:justify-center">
              <img src={regimg} alt="img" className=" rounded-2xl" />
            </div>

            <form onSubmit={submitHandler} className="p-2 lg:p-8 m-6 border-2 lg:w-2/5 md:h-2/5 w-[80%]">
              <div className="mb-5 p-4">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormDataChange}
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 p-4">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormDataChange}
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5 p-4">
                <input
                  type="password"
                  placeholder="Enter your Password"
                  name="password"
                  value={formData.password}
                  onChange={handleFormDataChange}
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                  min="8"
                />
              </div>

              <div className="mb-5 p-4 flex">
                <h2 className="hidden md:flex text-sm text-center flex-wrap justify-center items-center">Phone Number:</h2>
                <div className="lg:ml-5 ml-1 w-[70%]">
                <PhoneInput
                  country={"in"}
                  name="phone_no"
                  value={formData.phone_no}
                  onChange={handleFormDataChange}
                  containerStyle={{ maxWidth: "20px" }}
                  inputStyle={{ maxWidth: "220px" }}
                  required
                  />
                  </div>
            </div>
            <div className="mb-5 p-4">
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleFormDataChange}
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mt-7 p-4">
                <button
                  disabled={loading && true}
                  type="submit"
                  className="w-full bg-blue-400 text-white text-[20px] leading-[30px] rounded-lg px-4 py-3"
                >
                  {loading ? (
                    <HashLoader size={35} className="text-green-500" />
                  ) : (
                    `Sign Up`
                  )}
                </button>
              </div>

              <p className="mt-4 p-4 text-textColor text-center">
                Already have an Account?{" "}
                <Link
                  to="/login"
                  className="text-primaryColor font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Signup;
