import { useState } from "react";
import Logo from "/Logo/logo.png";
import NavBar from "../components/NavBar/NavBar";
import Footer from '../components/Footer/Footer';
import AboutGrid from "../components/Card/AboutGrid";
import Leaders from "../data/Leaders.js";

const AboutPage = () => {

  const [category, setCategory] = useState("Executive");
  const filteredLeaders = Leaders.filter((leader) => leader.tag === category);

  return (
    <>
      <NavBar />
      <div className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[20px] lg:text-[42px] font-grotesk font-semibold leading-snug">
            There is More to the Ajayi Crowther University Student&quot;s Assembly than just simply paying the ACUSA fee.
          </h2>
        </div>
        <AboutGrid />
        <div className="bg-white ">
          {/* Description Section */}
          <div className=" px-12 text-center mt-6">
            <p className="font-grotesk leading-8 text-[14px] lg:text-[18px] text-gray-700 ">
              The Ajayi Crowther University Student&quot;s Assembly, ACUSA, is a student-led organization. ACUSA is committed to promoting the welfare, rights, and interests of all students at the university. As the liaison between the student body and the university administration, ACUSA ensures that students’ voices are heard, their issues are addressed, and their social and academic experiences are enhanced.
              <br />
              As a group founded on service, leadership, and accountability, ACUSA supports programs and policies that advance student growth, create a welcoming campus environment, and facilitate productive communication between students and school administrators.
            </p>
          </div>

          {/* Mission, Vision, and Logo Section */}
          <div className=" mt-10 pt-24 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12 bg-gray-100">
            {/* Logo */}
            <div className="flex justify-center items-center">
              <img src={Logo} alt="ACUSA Logo" className="w-64 h-64 object-contain" />
            </div>/

            {/* Mission */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-main text-[20px] lg:text-[32px] font-semibold">Our Mission</h4>
              <p className="text-gray-600 text-base">
                ACUSA aims to foster leadership, accountability, and service while creating an inclusive campus culture. We advocate for student growth, enhance communication with the administration, and ensure the needs of students are met through engagement and representation.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-main text-[20px] lg:text-[32px] font-semibold">Our Vision</h4>
              <p className="text-gray-600 text-base">
                To be a leading student body that champions student interests, promotes academic excellence, and nurtures a vibrant university experience through effective governance and representation.
              </p>
            </div>
          </div>

          <div className="bg-white h-full ">
            <div className="flex mt-6 gap-4 mb-4 justify-center">
              {["Executive", "Legislative", "Judiciary", "Appointee"].map((type) => (
                <button
                  key={type}
                  onClick={() => setCategory(type)}
                  className={`text-center text-base font-semibold font-rubik leading-6 
                    ${category === type ? "text-main underline" : "text-[#C1B8B8]"}
                    hover:text-main transition-all`}>
                  {type}
                </button>
              ))}
            </div>

            <div className="bg-main flex flex-col lg:flex-row gap-6 p-12">
              {/* Left Side */}
              <div className="lg:w-1/3 flex flex-col justify-center gap-4 text-white">
                <hr className="border-white mx-auto w-1/2" />
                <p className="font-rubik leading-[42px] max-w-lg text-center sm:text-4xl text-xl font-semibold tracking-tight text-balance">
                  &quot; These are our {category}, where leadership meets vision and passion
                  drives innovation. We proudly introduce you to the dedicated
                  individuals who steer the course of ACUSA and its organs towards
                  excellence. &quot;
                </p>
                <hr className="border-white mx-auto w-1/2" />
              </div>

              {/* Right Side - Grid of Executives */}
              <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredLeaders.length > 0 ? (
                  filteredLeaders.map((leader, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img src={leader.image} alt={leader.name} className="w-full h-36 object-cover bg-gray-200" />
                      <div className="bg-white text-center px-2 py-2 shadow-md w-full">
                        <h5 className="font-semibold">{leader.name}</h5>
                        <p className="text-[12px] text-[#CC0D0D]">{leader.position}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-white text-center w-full">No {category}s available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage;