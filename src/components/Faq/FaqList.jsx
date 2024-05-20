import { faqs } from "../../assets/data/faqs";
import FaqItem from "./FaqItem";

const FaqList = () => {
  return (
    <ul className="mt-[38px] md:mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {faqs.map((item, index) => (
        <FaqItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default FaqList;
