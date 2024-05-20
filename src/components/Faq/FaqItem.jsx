/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

const FaqItem = ({ item }) => {
  const [isOpen, setisOpen] = useState(false);

  const ToggleAccordian = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer mx-2 lg:max-w-[32rem] max-w-[30rem]">
      <div onClick={ToggleAccordian}  className="flex items-center justify-between gap-5">
        <h4  className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
          {item.question}
        </h4>
        <div 
          className={` ${
            isOpen && "bg-primaryColor text-white border-none"
          }  w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] border border-solid border-[#141F21] rounded flex items-center justify-center`}
        >
          {isOpen ? (
            <AiFillCaretUp onClick={ToggleAccordian} />
          ) : (
            <AiFillCaretDown onClick={ToggleAccordian} />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 lg:max-w-[32rem] max-w-[30rem]">
          <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">{item.answer}</p>
        </div>
      )}
    </div>
  );
};
export default FaqItem;
