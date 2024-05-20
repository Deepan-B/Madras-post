import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import logo from "../assets/logo.png";

const SocialLinks = [
  {
    path: "https://github.com/Deepan-B",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/indiapost_dop/?hl=en",
    icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/groups/6623473/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.facebook.com/PostOffice.IN/",
    icon: <AiFillFacebook className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://x.com/postofficeindia?lang=en",
    icon: <AiOutlineTwitter className="group-hover:text-white w-4 h-5" />,
  },
];

const pages = [
  {
    path: "https://www.indiapost.gov.in/VAS/Pages/Form.aspx",
    display: "Forms",
  },
  {
    path: "https://www.indiapost.gov.in/VAS/Pages/Form.aspx",
    display: "Holidays",
  },
  {
    path: "/contact",
    display: "Feedback",
  },
  {
    path: "https://www.indiapost.gov.in/VAS/Pages/RTI/RTI.aspx",
    display: "Right to Information",
  },
];

const pages2 = [
  {
    path: "https://eprocure.gov.in/cppp/searchbyorg/Department%20of%20Posts",
    display: "Related Sites",
  },
  {
    path: "https://www.indiapost.gov.in/VAS/Pages/Content/disclaimer.aspx",
    display: "Policies",
  },

  {
    path: "/https://www.indiapost.gov.in/VAS/Pages/Content/disclaimer.aspx",
    display: "Employee Corner",
  },
  {
    path: "https://www.indiapost.gov.in/PublishingImages/portalofindia.jpg",
    display: "Government",
  },
];

const pages3 = [
  {
    path: "http://www.nvsp.in/",
    display: "Voters portal",
  },
  {
    path: "https://www.indiacode.nic.in/",
    display: "Indian code",
  },
  {
    path: "https://www.indiapost.gov.in/VAS/DOP_PDFFiles/Safe_to_Host_Certificate.pdf",
    display: "Audit Report",
  },
  {
    path: "https://eprocure.gov.in/cppp/searchbyorg/Department%20of%20Posts",
    display: "Tenders",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-10 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row md:gap-[50px] gap-[20px]">
          <div className="mx-auto">
            <div className="flex items-center justify-between">
              <p className="font-bold text-2xl text-[#eaad7c] ">MADRAS MAIL</p>
              <img src={logo} alt="" className="w-[120px] " />
            </div>
            <div className="flex items-center gap-3 mt-4 justify-around md:justify-start">
              {SocialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
            <p className="text-[10px] text-center md:text-left md:text-[16px] md:leading-7 font-[400] text-textColor mt-2 md:mt-4">
              Copyright &copy; {year} developed by Deepan & team all rights
              reserved.
            </p>
          </div>
          <div className="flex md:flex-row justify-between md:w-2/3 md:gap-3 gap-2">
            <div className="text-left">
              <ul>
                {pages.map((item, index) => (
                  <li key={index} className=" md:mb-4 ">
                    <Link
                      to={item.path}
                      className="text-[10px] md:text-[16px] leading-tight md:leading-7 font-[400] text-textColor"
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <ul>
                {pages3.map((item, index) => (
                  <li key={index} className="md:mb-4">
                    <Link
                      to={item.path}
                      className="text-[10px] md:text-[16px] md:leading-7 font-[400] text-textColor"
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-right ">
              <ul>
                {pages2.map((item, index) => (
                  <li key={index} className="md:mb-4">
                    <Link
                      to={item.path}
                      className="text-[10px] md:text-[16px] md:leading-7 font-[400] text-textColor"
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
