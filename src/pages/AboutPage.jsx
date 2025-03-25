import { useState } from "react";
import Logo from "/Logo/logo.png";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
// import AboutGrid from "../components/Card/AboutGrid";
import { Leaders, Team }from "../data/Leaders.js";
// import Media from "../data/Team.js";
import MissVisionCard from "../components/Card/MissVisionCard.jsx";
import { MissVision } from "../data/AboutUs.js";
import ProfileCard from "../components/Card/AboutProfileCard.jsx";

const AboutPage = () => {
  const [category, setCategory] = useState("Executive");
  const filteredLeaders = Leaders.filter((leader) => leader.tag === category);
  const filteredTeam = Team;
  // const filteredTeam = Team.filter((team) => team.tag === category);


  return (
    <div className=" w-[100vw] ">
      {/* navbar */}
      <NavBar />
      {/* navbar */}
      {/* HERO SECTION */}
      <div className="h-[50vh] border border-amber-500 "></div>
      {/* HERO SECTION */}

      {/* Leaarn about Acusa */}
      <div className="flex flex-col p-[20px] lg:p-[40px]   ">
        {/* learn about acusa text1 */}
        <div className="flex flex-col items-start text-left  ">
        <p className="text-[8px] lg:text-[20px] text-start">Learn about ACUSA</p>
        <p className="font-extrabold text-[14px] lg:text-[36px] font-rubik lg:text-start text-center">There is more to the Ajayi Crowther University Students’ Assembly than just simply paying the ACUSA fee.</p>
        </div>
        {/* learn about acusa text1 */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
      
      {/* Image Grid */}
      <div className="grid grid-cols-4 grid-rows-2 gap-[10px] lg:gap-[20px] w-full  ">
        {/* <div className="col-span-2"> */}
          <img src="/About/Frame 270.png"  alt="Students in a lecture hall" className="col-span-3 " />
          <img src="/About/Frame 272.png"  alt="Students in a lecture hall" className=" border object-bottom lg:mt-[95px]" />
        {/* </div> */}
        <img src="/About/Frame 273.png" alt="Students in a lecture hall" className=" col-span-1" />
        <img src="/About/Frame 271.png"  alt="Students in discussion" className=" col-span-3" />
        
      
      </div>
      
      {/* Text Content */}
      <div className="w-full  font-rubik  ">
      <p className="font-grotesk text-[16px] lg:text-[32px] text-center lg:text-start   font-medium">
        ACUSA is a student-led organization, the Ajayi Crowther University Student Assembly (ACUSA) is committed to promoting the welfare, rights, and interests of all students at the university.
        </p>
        <br />
        <p className="text-[12px] lg:text-[26px] text-center lg:text-start text-[#363636] ">
          As the liaison between the student body and the university administration, ACUSA, which is made up of chosen student officials, makes sure that students’ opinions are heard, their issues are taken care of, and their social and academic experiences are enhanced.
        </p>
        
      </div>
      </div>
      </div>

      {/* Leaarn about Acusa  */}

      {/* Mission, Vision, and Logo Section */}
      <div className=" px-[15px] py-[15px] lg:px-[20px] lg:py-[90px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  bg-gray-100">
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

      <section className="flex flex-col md:flex-row items-center lg:gap-8 gap-4 lg:relative text-white">
      {/* Text Content */}
      <div className=" bg-main py-[25px] lg:py-[40px] lg:w-[80vw] lg:h-[65vh] h-[52vh]">
        <p className="text-lg font-medium font-grotesk text-[16px] lg:text-[32px] lg:px-[40px] px-[15px] lg:text-start lg:w-[63vw] text-center">
          As a group founded on service, leadership,  and accountability,  <span className="font-bold">ACUSA</span> supports programs and policies that advance student growth, create a welcoming campus  environment, and facilitate productive  communication between students and school administrators.
        </p>
        <br />
        <p className="font-grotesk font-light text-center lg:text-start text-[12px] lg:text-[26px] px-[15px] lg:px-[40px] lg:w-[62vw]">
          ACUSA makes sure that the needs of the student  body as a whole are satisfied through representation,  engagement, and calculated action.
        </p>
      </div>
      
      {/* Image */}
      <div className=" px-[30px] lg:pr-[40px] relative bottom-[120px] lg:bottom-[50px] lg:absolute lg:left-[850px] ">
        <img src="/About/Frame 275.png"  alt="Students in a lecture hall" className=" relative lg:h-[53vh] " />
      </div>
    </section>

      <div className="flex justify-between flex-col gap-3  bg-[#EAEAEA] p-[15px] lg:p-[40px]">
          <div className="flex flex-col items-center justify-center text-center ">
            <h1 className="font-bold text-[17px] lg:text-[32px] font-rubik">Meet the ACUSA Leadership:
              <br />
Executives, Legislatives, Judiciary, and Appointees</h1>
<br />
<p className=" text-[12px] lg:text-[24px] font-grotesk">Meet the dedicated individuals driving our vision forward. From the Executives to the Senate, Judiciary, and Executive Appointees, each member plays a vital role in governance, decision-making, and upholding the values of our community</p>
          </div>
             <div className="flex items-center place-content-center lg:gap-6 gap-4 p-2 ">
              {["Executive", "Legislative", "Judiciary", "Appointee"].map(
                (type) => (
                  <button
                    key={type}
                    onClick={() => setCategory(type)}
                    className={`text-center lg:text-[18px] text-[10px] cursor-pointer  font-grotesk 
                    ${category === type ? "bg-main text-white"  : "text-black"}
                    hover:bg-main transition-all bg-[#C4C4C4] px-3 lg:px-6 py-2 rounded-[6px] text-center`}
                  >
                    {type}
                  </button>
                )
              )}
            </div>
          
          <div className=" border border-[#c5c1c143] grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-2  ">
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


        {/* About Acusa media */}
<div className=" flex flex-col items-center justify-start">
            <div className="flex flex-col items-center justify-center text-center p-[15px] lg:p-[40px]">
              <h1 className="font-rubik text-[16px] lg:text-[36px] font-bold ">About ACUSA Media</h1>
              <p className="text-[12px] lg:text-[24px] font-grotesk">ACUSA Media is the official media body for the Ajayi Crowther University Student’s Assembly. It has the responsibility of providing full media activities for ACUSA. ACUSA Media is responsible for supporting ACUSA with its core responsibility; giving voice to the students and being an ear to the management.
The ACUSA Media is therefore split into various teams that help achieve this goal. These teams are headed by the best individuals in their respective fields. They are: </p>
            </div>
            <div className=" border border-[#c5c1c143] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full no-scrollbar overflow-x-scroll  ">
            {filteredTeam.length <= 0 ?
              <p className="text-red-500 text-center w-full col-span-3 h-fit font-grotesk text-[20px]">
                No {category}s available.
              </p>
            : (
              filteredTeam.map((team, index) => (
                <ProfileCard
                  key={index}
                  name={team.name}
                  position={team.position}
                  image={team.image}
                  
                />
              ))
            ) }
          </div>
        </div>
        
        {/* About Acusa media */}
      {/* </div> */}

      <Footer />
    </div>
  );
};

export default AboutPage;
