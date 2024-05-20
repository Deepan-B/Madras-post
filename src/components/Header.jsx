/* eslint-disable react-hooks/rules-of-hooks */
import logo from "../assets/logo.png";
import { authContext } from "../../context/AuthContext";
import { useContext, useRef } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const header = () => {
  // const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, token, type } = useContext(authContext);
  // console.log(user , token);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <div className=" md:h-20 w-full text-center bg-[#ede8d4] flex items-center sticky left-0 top-0 z-10">
      <img src={logo} alt="" className="w-[45px] md:w-[80px]" />
      <div className="flex justify-between w-full md:mr-10 md:ml-3 mr-2 ml-2 items-center">
        <p className=" text-xl md:text-3xl font-semibold text-[rgb(255,144,104)]">
          MADRAS MAIL
        </p>
        <div className="flex items-center">
          <div className="navigation mr-3" ref={menuRef} onClick={toggleMenu}>
            <span className="md:hidden relative left-[90%] sm:left-[95%] top-[20px] z-[300]">
              <IoIosCloseCircleOutline className="w-6 h-6 cursor-pointer"></IoIosCloseCircleOutline>
            </span>
            <ul className="menu flex justify-center md:justify-end items-center text-base lg:text-lg gap-6 lg:gap-10">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-green-500 text-lg lg:text-xl leading-7 font-bold"
                        : "text-textColor leading-5 font-medium"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="gap-4 flex items-center mx-2">
            {token && user ? (
              <div className="flex flex-col">
                <Link
                  className="flex flex-col"
                  to={`${
                    type === "admin"
                      ? "/admin/profile/me"
                      : type === "postoffice"
                      ? "/postoffice/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  {user.photo ? (
                    <figure className="w-[35px] h-[35px] rounded-full border-2">
                      <img
                        src={user.photo}
                        alt="user"
                        className="max-w-[33px] max-h-[33px] object-contain rounded-full cursor-pointer m-auto"
                      />
                    </figure>
                  ) : (
                    <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-gray-300 text-gray-600 font-semibold cursor-pointer">
                      {user?.username?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-green-500 rounded-full px-4 py-1 md:px-6 md:py-2 text-white font-semibold h-[30px] md:h-[40px] lg:h-[44px] flex items-center">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer"></BiMenu>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
