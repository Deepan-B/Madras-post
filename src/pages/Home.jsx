import ServicesList from "../components/services/ServicesList";
import heroImage from "../../src/assets/hero-img.jpg";
import aboutus from "../../src/assets/about-us.jpg";
import FaqList from "../components/Faq/FaqList";
import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import { toast } from "react-toastify";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { BASE_URL } from "../../config";

const Home = () => {
  const [parcel_id, setParcelid] = useState("");
  const [loading, setLoading] = useState(false);
  // const { p1, h1, h2, p2, pstatus } = res;

  const p1 = "new", h1 = "sdds", h2 = "adasadd", p2 = "sdfwsd" , pstatusnum = 3;


  const handleChange = (e) => {
    setParcelid(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/customer/parcel/find`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ parcel_id: parcel_id }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      // console.log(result);

      setLoading(false);
      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }

    setLoading(false)
  };

  return (
    <>
      {/* // hero section */}
      <section className="max-w-[1550px] mb-5 ">
        <div
          className="hero-section h-screen md:h-[90vh] w-full bg-center md:bg-cover rounded-3xl"
          style={{
            backgroundImage: `url(${heroImage})`,
            fontFamily: "Poetsen One",
          }}
        >
          <div className="absolute w-full mt-[38px] md:mt-0" style={{WebkitTextStroke: "2px black" , color : "transparent"}}>
            <h1 className="text-5xl md:text-7xl xl:text-8xl text-center md:text-left font-medium md:ml-5 md:mt-4">
              Time to Revolutionize
            </h1>
            <h1 className="text-5xl md:text-7xl xl:text-8xl text-center  md:text-left font-medium ml-5 mt-4">
              Your
            </h1>
            <h1 className="text-5xl md:text-7xl xl:text-8xl text-center  md:text-left font-medium ml-5 mt-4">
              Mailing
            </h1>
            <h1 className="text-5xl md:text-7xl xl:text-8xl text-center  md:text-left font-medium ml-5 mt-4">
              System
            </h1>
          </div>
        </div>
      </section>
      {/* //parcel tracking  */}
      <h2 className="text-6xl text-center mt-4">Find your Postage</h2>
      <section className="mb-5 mt-20 h-[70vh] flex flex-col md:flex-row container gap-4">
        <div className="mx-auto flex justify-center  md:w-1/3">
          <form
            onSubmit={handleSubmit}
            className="flex items-center  justify-center mx-2 w-full"
          >
            <input
              type="text"
              className="px-6 py-3"
              value={parcel_id}
              onChange={handleChange}
              placeholder="Enter Parcel-id"
            />
            <button
              className="lg:px-6 lg:py-3 px-2 py-1 text-white bg-green-500 text-sm"
              type="submit"
            >
              Find the Status
            </button>
          </form>
        </div>
        <div className="border-4 h-full md:w-2/3 flex items-center">
        {loading ? (
            <div className="flex items-center justify-center h-full">
              <HashLoader size={50} color={"#36d7b7"} loading={loading} />
            </div>
          ) : (
            <Timeline position="alternate"
            className="text-[20px]" >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant={pstatusnum < 1 ? "outlined" : "default"} color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{p1}</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant={pstatusnum < 2 ? "outlined" : "default"} color="primary"/>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{h1}</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant={pstatusnum < 3 ? "outlined" : "default"} color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{h2}</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant={pstatusnum < 4 ? "outlined" : "default"} color="primary" />
                </TimelineSeparator>
                <TimelineContent>{p2}</TimelineContent>
              </TimelineItem>
            </Timeline>
          )}
        </div>
      </section>
      {/* cards */}
      <ServicesList />
      {/* about us */}
      <section className=" mb-5 container">
        <h2 className="text-center text-4xl font-medium mb-8">
          The Future of Postage is Here
        </h2>
        <div className="px-4 py-2 flex flex-col md:flex-row justify-between items-center md:mx-11">
          <p className="md:m-6 sm:text-xl md:text-xl lg:text-2xl  md:p-6 mt-4 text-center md:text-left">
            We understand the complexities of modern shipping. That&apos;s why
            we created a powerful yet user-friendly postage management system
            designed to streamline your mailing process, save you time and
            money, and give you complete control over your shipments. We&apos;re
            passionate about helping businesses of all sizes navigate the
            ever-changing world of postage, and we&apos;re dedicated to
            providing innovative solutions that empower you to ship smarter.
          </p>
          <img
            src={aboutus}
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] rounded-full"
          />
        </div>
      </section>
      {/* FAQS */}
      <section className="mt-[30px]">
        <div className="container">
          <div className="flex flex-col justify-between gap-[20px] lg:gap-0">
            <h2 className="heading text-center">
              Frequently aksed Questions by our Custumors
            </h2>
            <div className="lg:ml-[40px] flex  flex-col md:flex-row justify-evenly items-center">
              <FaqList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

