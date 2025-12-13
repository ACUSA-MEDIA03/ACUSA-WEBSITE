// import { useState } from "react";
// import Logo from "/Logo/logo.png";
// import NavBar from "../components/NavBar/NavBar";
// import Footer from "../components/Footer/Footer";
// // import AboutGrid from "../components/Card/AboutGrid";
// import { Leaders, Team } from "../data/Leaders.js";
// // import Media from "../data/Team.js";
// import MissVisionCard from "../components/Card/MissVisionCard.jsx";
// import { MissVision } from "../data/AboutUs.js";
// import ProfileCard from "../components/Card/AboutProfileCard.jsx";
// import Banner from "../components/Banner/all.jpg"

// const AboutPage = () => {
//   const [category, setCategory] = useState("Executive");
//   const filteredLeaders = Leaders.filter((leader) => leader.tag === category);
//   const filteredTeam = Team;
//   // const filteredTeam = Team.filter((team) => team.tag === category);


//   return (
//     <div className="">
//       {/* navbar */}
//       <NavBar className="fixed pb-2" />
//       {/* HERO SECTION */}
//       <div className="h-[50vh] grid bg-no-repeat bg-cover bg-center  "
//         style={{ backgroundImage: `url(${Banner})` }}>
//         <div className=" flex justify-center flex-col lg:px-[70px] px-[20px] py-[120px] text-white">
//           <div className="lg:space-y-6 space-y-4 ">
//             <h2 className="font-grotesk lg:text-6xl text-4xl font-bold">About Us</h2>
//             <p className="text-2xl lg:text-xl   ">Learn all there is to learn about the Ajayi Crowther University Student&apos; Assembly</p>
//           </div>
//         </div>
//       </div>

//       {/* Leaarn about Acusa */}
//       <div className="flex flex-col p-[20px] lg:p-[40px]">
//         {/* learn about acusa text1 */}
//         <div className="flex flex-col items-start text-left px-6 py-12  pl-8">
//           <p className="text-[8px] lg:text-[20px] text-start">Learn about ACUSA</p>
//           <p className="font-extrabold text-[14px] lg:text-[36px] font-rubik lg:text-start text-center">There is more to the Ajayi Crowther University Students Assembly than just simply paying the ACUSA fee.</p>
//         </div>
//         {/* learn about acusa text1 */}

//         <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
//           {/* Image Grid */}
//           <div className="grid grid-cols-4 grid-rows-2 gap-[10px] lg:gap-[20px] w-full  ">
//             {/* <div className="col-span-2"> */}
//             <img src="/About/Frame 270.png" alt="Students in a lecture hall" className="col-span-3 " />
//             <img src="/About/Frame 272.png" alt="Students in a lecture hall" className=" border object-bottom lg:mt-[95px]" />
//             {/* </div> */}
//             <img src="/About/Frame 273.png" alt="Students in a lecture hall" className=" col-span-1" />
//             <img src="/About/Frame 271.png" alt="Students in discussion" className=" col-span-3" />


//           </div>
//           {/* Test Content */}
//           <div className="w-full  font-rubik  ">
//             <p className="font-grotesk text-[16px] lg:text-[32px] text-center lg:text-start font-medium">
//               ACUSA is a student-led organization, the Ajayi Crowther University Student Assembly (ACUSA) is committed to promoting the welfare, rights, and interests of all students at the university.
//             </p>
//             <br />
//             <p className="text-[12px] lg:text-[26px] text-center lg:text-start text-[#363636] ">
//               As the liaison between the student body and the university administration, ACUSA, which is made up of chosen student officials, makes sure that students’ opinions are heard, their issues are taken care of, and their social and academic experiences are enhanced.
//             </p>

//           </div>
//         </div>
//       </div>


//       {/* Mission, Vision, and Logo Section */}
//       <div className=" px-[15px] py-[15px] lg:px-[20px] lg:py-[90px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  bg-gray-100">
//         {/* Logo */}
//         <div className="flex justify-center items-center">
//           <img
//             src={Logo}
//             alt="ACUSA Logo"
//             className="w-64 h-64 object-contain"
//           />
//         </div>
//         {/* Mission And VIsion */}
//         {MissVision.map((detail) => (
//           <MissVisionCard
//             key={detail.id}
//             header={detail.header}
//             description={detail.description}
//           />
//         ))}
//       </div>

//       <section className="flex flex-col md:flex-row items-center lg:gap-8 gap-4 lg:relative text-white">
//         {/* Text Content */}
//         <div className=" bg-main py-30 my-8 lg:py-[40px] lg:w-[80vw] lg:h-[65vh] h-[56vh]">
//           <p className="text-lg font-medium font-grotesk text-[14px] lg:text-[28px] lg:px-[40px] px-[15px] lg:text-start lg:w-[63vw] text-center">
//             As a group founded on service, leadership,  and accountability,  <span className="font-bold">ACUSA </span>
//             supports programs and policies that advance student growth, create a welcoming campus  environment, and facilitate productive
//             communication between students and school administrators.
//           </p>
//           <br />
//           <p className="font-grotesk font-light text-center lg:text-start text-[12px] lg:text-[24px] px-[15px] lg:px-[40px] lg:w-[62vw]">
//             ACUSA makes sure that the needs of the student  body as a whole are satisfied through representation,  engagement, and calculated action.
//           </p>
//         </div>

//         {/* Image */}
//         <div className=" px-[30px] lg:pr-[40px] relative bottom-[120px] lg:bottom-[50px] lg:absolute lg:left-[850px] ">
//           <img src="/About/Frame 275.png" alt="Students in a lecture hall" className=" relative lg:h-[53vh] " />
//         </div>
//       </section>

//       <div className="flex justify-between flex-col gap-3  bg-[#EAEAEA] p-[15px] lg:p-[40px]">
//         <div className="flex flex-col items-center justify-center text-center ">
//           <h1 className="font-bold text-[17px] lg:text-[32px] font-rubik">Meet the ACUSA Leadership:
//             <br />
//             Executives, Legislatives, Judiciary, and Appointees</h1>
//           <br />
//           <p className=" text-[12px] lg:text-[24px] font-grotesk">Meet the dedicated individuals driving our vision forward. From the Executives to the Senate, Judiciary, and Executive Appointees, each member plays a vital role in governance, decision-making, and upholding the values of our community</p>
//         </div>
//         <div className="flex items-center place-content-center lg:gap-6 gap-4 p-2 ">
//           {["Executive", "Legislative", "Judiciary", "Appointee"].map(
//             (type) => (
//               <button
//                 key={type}
//                 onClick={() => setCategory(type)}
//                 className={`text-center lg:text-[18px] text-[10px] cursor-pointer  font-grotesk
//                     ${category === type ? "bg-main text-white" : "text-black"}
//                     hover:bg-main transition-all bg-[#C4C4C4] px-3 lg:px-6 py-2 rounded-[6px] text-center`}
//               >
//                 {type}
//               </button>
//             )
//           )}
//         </div>

//         <div className=" border border-[#c5c1c143] grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-2  ">
//           {filteredLeaders.length <= 0 ?
//             <p className="text-red-500 text-center w-full col-span-3 h-fit font-grotesk text-[20px]">
//               No {category}s available.
//             </p>
//             : (
//               filteredLeaders.map((leader, index) => (
//                 <ProfileCard
//                   key={index}
//                   name={leader.name}
//                   position={leader.position}
//                   image={leader.image}
//                 />
//               ))
//             )}
//         </div>
//       </div>


//       {/* About Acusa media */}
//       <div className=" flex flex-col items-center justify-start my-4">
//         <div className="flex flex-col items-center justify-center text-center p-[15px] lg:p-[40px]">
//           <h1 className="font-rubik text-[16px] lg:text-[36px] font-bold ">About ACUSA Media</h1>
//           <p className="text-[12px] lg:text-[24px] font-grotesk">ACUSA Media is the official media body for the Ajayi Crowther University Student’s Assembly. It has the responsibility of providing full media activities for ACUSA. ACUSA Media is responsible for supporting ACUSA with its core responsibility; giving voice to the students and being an ear to the management.
//             The ACUSA Media is therefore split into various teams that help achieve this goal. These teams are headed by the best individuals in their respective fields. They are: </p>
//         </div>
//         <div className=" border border-[#c5c1c143] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full no-scrollbar overflow-x-scroll  ">
//           {filteredTeam.length <= 0 ?
//             <p className="text-red-500 text-center w-full col-span-3 h-fit font-grotesk text-[20px]">
//               No {category}s available.
//             </p>
//             : (
//               filteredTeam.map((team, index) => (
//                 <ProfileCard
//                   key={index}
//                   name={team.name}
//                   position={team.position}
//                   image={team.image}

//                 />
//               ))
//             )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default AboutPage;

import { useState } from "react";
import Logo from "/Logo/logo.png";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Leaders, Team } from "../data/Leaders.js";
import MissVisionCard from "../components/Card/MissVisionCard.jsx";
import { MissVision } from "../data/AboutUs.js";
import ProfileCard from "../components/Card/AboutProfileCard.jsx";
import Banner from "../components/Banner/all.jpg";

const AboutPage = () => {
  const [category, setCategory] = useState("Executive");
  const filteredLeaders = Leaders.filter((leader) => leader.tag === category);
  const filteredTeam = Team;

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <NavBar className="fixed pb-2" />

      {/* HERO SECTION */}
      <div
        className="h-[50vh] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="flex justify-center flex-col px-5 lg:px-20 py-32 text-white h-full bg-black/40 ">
          <div className="max-w-4xl space-y-4 lg:space-y-6 pt-12">
            <h1 className="font-bold text-4xl lg:text-6xl leading-tight ">
              About Us
            </h1>
            <p className="text-lg lg:text-2xl leading-relaxed max-w-3xl">
              Learn all there is to learn about the Ajayi Crowther University
              Students&apos; Assembly
            </p>
          </div>
        </div>
      </div>

      {/* Learn about ACUSA Section */}
      <section className="px-5 lg:px-20 py-12 lg:py-20">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-[8px] lg:text-[24px] font-semibold text-gray-600 mb-2">
            Learn about ACUSA
          </p>
          <h2 className="text-2xl lg:text-4xl font-bold leading-tight max-w-4xl font-rubik ">
            There is more to the Ajayi Crowther University Students Assembly
            than just simply paying the ACUSA fee.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Image Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-4 grid-rows-2 gap-3 lg:gap-5">
              <img
                src="/About/Frame 270.png"
                alt="Students in a lecture hall"
                className="col-span-3 object-cover w-full h-full"
              />
              <img
                src="/About/Frame 272.png"
                alt="Students in a lecture hall"
                className="object-cover w-full h-full"
              />
              <img
                src="/About/Frame 273.png"
                alt="Students in a lecture hall"
                className="col-span-1  object-cover w-full h-full"
              />
              <img
                src="/About/Frame 271.png"
                alt="Students in discussion"
                className="col-span-3  object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-xl lg:text-3xl font-semibold leading-relaxed">
              ACUSA is a student-led organization, the Ajayi Crowther University
              Student Assembly (ACUSA) is committed to promoting the welfare,
              rights, and interests of all students at the university.
            </p>
            <p className="text-base lg:text-xl text-gray-700 leading-relaxed">
              As the liaison between the student body and the university
              administration, ACUSA, which is made up of chosen student
              officials, makes sure that students&apos; opinions are heard, their
              issues are taken care of, and their social and academic
              experiences are enhanced.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Logo Section */}
      <section className="bg-gray-100 px-5 lg:px-20 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <img
              src={Logo}
              alt="ACUSA Logo"
              className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
            />
          </div>
          {/* Mission And Vision */}
          {MissVision.map((detail) => (
            <MissVisionCard
              key={detail.id}
              header={detail.header}
              description={detail.description}
            />
          ))}
        </div>
      </section>

      {/* Quote Section with Image */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Text Content */}
          <div className="bg-main text-white px-5 lg:px-20 py-12 lg:py-20 lg:w-2/3 flex flex-col justify-center">
            <p className="text-lg lg:text-3xl font-medium leading-relaxed mb-6">
              As a group founded on service, leadership, and accountability,{" "}
              <span className="font-bold">ACUSA</span> supports programs and
              policies that advance student growth, create a welcoming campus
              environment, and facilitate productive communication between
              students and school administrators.
            </p>
            <p className="text-base lg:text-2xl leading-relaxed opacity-90">
              ACUSA makes sure that the needs of the student body as a whole are
              satisfied through representation, engagement, and calculated
              action.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/3 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 p-5 lg:p-0">
            <img
              src="/About/Frame 275.png"
              alt="Students in a lecture hall"
              className="w-full h-full object-cover rounded-lg lg:rounded-none shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-gray-100 px-5 lg:px-20 py-12 lg:py-20">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12 max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Meet the ACUSA Leadership: Executives, Legislatives, Judiciary, and
            Appointees
          </h2>
          <p className="text-base lg:text-xl text-gray-700 leading-relaxed">
            Meet the dedicated individuals driving our vision forward. From the
            Executives to the Senate, Judiciary, and Executive Appointees, each
            member plays a vital role in governance, decision-making, and
            upholding the values of our community
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 lg:mb-12">
          {["Executive", "Legislative", "Judiciary", "Appointee"].map(
            (type) => (
              <button
                key={type}
                onClick={() => setCategory(type)}
                className={`px-6 lg:px-8 py-2.5 lg:py-3 rounded-lg text-sm lg:text-base font-medium transition-all ${
                  category === type
                    ? "bg-main text-white shadow-lg"
                    : "bg-gray-300 text-gray-800 hover:bg-main hover:text-white"
                }`}
              >
                {type}
              </button>
            )
          )}
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredLeaders.length <= 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-red-500 text-lg lg:text-xl font-medium">
                No {category}s available.
              </p>
            </div>
          ) : (
            filteredLeaders.map((leader, index) => (
              <ProfileCard
                key={index}
                name={leader.name}
                position={leader.position}
                image={leader.image}
              />
            ))
          )}
        </div>
      </section>

      {/* ACUSA Media Section */}
      <section className="px-5 lg:px-20 py-12 lg:py-20">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12 max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6">
            About ACUSA Media
          </h2>
          <p className="text-base lg:text-xl text-gray-700 leading-relaxed">
            ACUSA Media is the official media body for the Ajayi Crowther
            University Student&apos;s Assembly. It has the responsibility of
            providing full media activities for ACUSA. ACUSA Media is
            responsible for supporting ACUSA with its core responsibility; giving
            voice to the students and being an ear to the management. The ACUSA
            Media is therefore split into various teams that help achieve this
            goal. These teams are headed by the best individuals in their
            respective fields. They are:
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredTeam.length <= 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-red-500 text-lg lg:text-xl font-medium">
                No team members available.
              </p>
            </div>
          ) : (
            filteredTeam.map((team, index) => (
              <ProfileCard
                key={index}
                name={team.name}
                position={team.position}
                image={team.image}
              />
            ))
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;