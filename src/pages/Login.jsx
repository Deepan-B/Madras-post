import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import { authContext } from "../../context/AuthContext.jsx";
import HashLoader from "react-spinners/HashLoader";
import logimg from "../assets/login.jpeg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { dispatch } = useContext(authContext);

  const handleFormDataChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
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

      console.log(result);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          type: result.data.type,
        },
      });

      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0 my-12">
      <div
        className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10"
        style={{ backgroundImage: `url(${logimg})` }}
      >
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          <span className="text-primaryColor">Welcome</span> to Postage
        </h3>

        <form className="py-4 md:py-0 px-2" onSubmit={submitHandler}>
          <div className="mb-5">
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

          <div className="mb-5">
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

          <div className="mt-7">
            <button
              type="submit"
              className="text-white text-[20px] leading-[30px] rounded-lg px-2 py-3 bg-blue-600 "
            >
              {loading ? <HashLoader size={25} color="fff" /> : "Login"}
            </button>
          </div>

          <div className="flex items-center justify-center">
            <p className=" text-white text-center bg-blue-400 w-max">
              Don&apos;t have an Account?{" "}
            </p>
            <Link
              to="/register"
              className="text-white rounded-lg bg-orange-400 px-1  md:px-2 md:py-3 font-medium ml-1"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
