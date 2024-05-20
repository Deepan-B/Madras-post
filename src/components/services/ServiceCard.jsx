/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, path , bt } = item;

  return (
    <div key={index} className="py-[30px] px-3 lg:px-5 border-2 rounded-lg flex flex-col justify-evenly">
      <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
        {name}
      </h2>
      <p className="text-[16px] leading-7 text-center font-[400] text-textColor mt-4 ">
        {desc}
      </p>

      <div className="flex items-center justify-center mt-[30px]">
        <Link
          to={path}
          className=" px-2 py-1  rounded-full bg-green-500 hover:border hover:border-solid hover:border-[#181A1E] flex items-center justify-center text-white  group hover:bg-white hover:text-black"
        >
          <div>{bt}</div>
        </Link>
        {/* <span
              className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
              style={{
                background: `${bgColor}`,
                color: `${textColor}`,
                borderRadius: "6px 0 0 6px",
              }}
            >
              {index + 1}
            </span> */}
      </div>
    </div>
  );
};

export default ServiceCard;
