import NavBar from "../components/NavBar/NavBar";
import Footer from '../components/Footer/Footer';


const images = [
  "/Gallery/11.png",
  "/Gallery/12.png",
  "/Gallery/3.png",
  "/Gallery/4.png",
  "/Gallery/all.JPG",
    // "/Gallery/1.JPG",
    "/Gallery/2.JPG",


];

const GallerytPage = () => {
  return (
    <>
    <div>
      <div className="bg-black">
        <NavBar />
      </div>
 <div className="lg:py-24 py-32">
  <div className="grid grid-cols-3 gap- ">
    {/* First Row */}
    <div className="col-span-3 grid grid-cols-2 gap- md:gap-4 w-full absolute">
      <img src={images[0]} alt="Gallery Image" className="object-cover w-full h-full" />
      <img src={images[1]} alt="Gallery Image" className="object-cover rounded-lg w-full h-full" />
    </div>

    {/* Middle Section */}
    <div className="grid grid-cols-2 col-span-3  gap-[15px] h-[50vh] ">
    {[...Array(4)].map((_, index) => (
        <div key={index} className="gallery-mask w-[100vw]
         h-[70vh] " style={{ maskImage: `url(/Gallery/mask${index }.png)`, WebkitMaskImage: `url(/Gallery/mask${index  }.png)` }}>
          <img src="/Gallery/all.JPG" alt={`Gallery Image `} className="object-cover " />
          <div className="absolute inset-0 bg-[#0C1657]/50 "></div>

        </div>
      ))}
      
    </div>

    {/* Last Row */}
    <div id="last-row-mask" className="col-span-3 grid grid-cols-2 gap- md:gap-4 w-full relative ">
      <img src={images[2]} alt="Gallery Image" className="object-cover rounded-b-md w-full h-full" />
      <img src={images[3]} alt="Gallery Image" className="object-cover rounded-lg w-full h-full" />
    </div>
  </div>

    </div>
    </div>
        <div id="break"  className="  bg-[#D49906] text-white py-3 px-20 relative ">
          <h2 className="font-rubik font-bold text-[24px] text-center lg:text-[50px]">Embark on a Journey Through a Gallery
Highlighting ACUSA&apos;s Excellence</h2>
        </div>
        

      <div id="footer" className="relative ">
        <Footer  />
        </div>
    </>
  );
};

export default GallerytPage;