import { useState } from "react";
import Logo from "/Logo/logo.png";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import AboutGrid from "../components/Card/AboutGrid";
import Leaders from "../data/Leaders.js";
import MissVisionCard from "../components/Card/MissVisionCard.jsx";
import { MissVision } from "../data/AboutUs.js";
import ProfileCard from "../components/Card/ProfileCard.jsx";

const AboutPage = () => {
  const [category, setCategory] = useState("Executive");
  const filteredLeaders = Leaders.filter((leader) => leader.tag === category);

  return (
    <>
      {/* navbar */}
      <NavBar />
      {/* navbar */}

      {/* hero section */}
      <div className="flex flex-col px-5 space-y-6 py-[60px]">
        {/* <div className=" text-center">
            <h2 className="text-[20px] lg:text-[42px] px-20 font-rubik font-[800] leading-snug">
              {` There is More to the Ajayi Crowther University Student's Assembly
              than just simply paying the ACUSA fee. `}
            </h2>
          </div> */}

        {/* Grid */}
        <AboutGrid />
        {/* Grid */}

        {/* Desctiption */}
        <div className=" ">
          <span className="font-rubik-dirt text-main text-[30px]">{`There is More to the ACUSA than just simply paying the ACUSA fee.`}</span>
          <p className="font-mont font-[300] leading-9 text-[14px] lg:text-[18px] text-paragraph">
            The Ajayi Crowther University Student&apos;s Assembly, ACUSA, is a
            student-led organization. ACUSA is committed to promoting the
            welfare, rights, and interests of all students at the university. As
            the liaison between the student body and the university
            administration, ACUSA ensures that students’ voices are heard, their
            issues are addressed, and their social and academic experiences are
            enhanced.
            <br />
            As a group founded on service, leadership, and accountability, ACUSA
            supports programs and policies that advance student growth, create a
            welcoming campus environment, and facilitate productive
            communication between students and school administrators.
          </p>
        </div>
        {/* Desctiption */}
      </div>

      {/* hero section */}

      {/* Mission, Vision, and Logo Section */}
      <div className="  px-[20px] py-[90px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  bg-gray-100">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <img
            src={Logo}
            alt="ACUSA Logo"
            className="w-64 h-64 object-contain"
          />
        </div>

        {/* Mission And VIsion */}
        {MissVision.map((detail) => (
          <MissVisionCard
            key={detail.id}
            header={detail.header}
            description={detail.description}
          />
        ))}
        {/* Mission And VIsion */}
      </div>

      <div className="flex justify-between flex-col gap-11 bg-[#f1f0f0] ">
        <div className="flex flex-col lg:flex-row p-5 gap-3">
          {/* Left Side */}
          <div className="flex lg:flex-col flex-col-reverse gap-10 lg:w-[38%] lg:px-3 py-4 h-fit">
          
            <div className="grid grid-cols-2 items-center place-content-center gap-6 ">
              {["Executive", "Legislative", "Judiciary", "Appointee"].map(
                (type) => (
                  <button
                    key={type}
                    onClick={() => setCategory(type)}
                    className={`text-center text-[18px]  cursor-pointer font-bold font-inter 
                    ${category === type ? "text-main" : "text-[#C1B8B8]"}
                    hover:text-main transition-all border border-[#c5c1c143] px-2 py-2 rounded-[6px] text-center`}
                  >
                    {type}
                  </button>
                )
              )}
            </div>

            <div className="">
              <hr className=" mx-auto w-1/2" />
              <p className="font-sora leading-[40px] text-center text-[20px] font-[400] tracking-tight text-balance">
                &quot;These are our {category}, where leadership meets vision
                and passion drives innovation. We proudly introduce you to the
                dedicated individuals who steer the course of ACUSA and its
                organs towards excellence.&quot;
              </p>
              <hr className=" mx-auto w-1/2" />
            </div>
          </div>

          {/* Right Side - Grid of Executives */}
          <div className=" border border-[#c5c1c143] grid lg:w-[80%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 h-[620px] overflow-scroll no-scrollbar">
            {filteredLeaders.length <= 0 ?
              <p className="text-red-500 text-center w-full col-span-3 h-fit font-grotesk text-[20px]">
                No {category}s available.
              </p>
            : (
              filteredLeaders.map((leader, index) => (
                <ProfileCard
                  key={index}
                  name={leader.name}
                  position={leader.position}
                  image={leader.image}
                />
              ))
            ) }
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
