import BannerImg from "/Banner/banner.jpg";

function AboutGrid() {
  return (
  <div className="grid grid-rows-2 gap-6 p-4 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 ">
    <div className="bg-main text-white flex-end lg:ml-64 ml-64 w-24 p-6 rounded-xl flex items-center " >
      {/* <img  src={BannerImg} className="w-full aspect-auto "/> */}
    </div>
    <div className="bg-main/50 text-white p-6 rounded-2xl w-92 flex items-center justify-center row-span-2">Items 2</div>
    <div className="bg-main-yellow p-6 rounded-xl flex items-center justify-center" ><p className="font-grotesk text-white">
      {`ACUSA is a student led organization that is committed to promoting the interests of students in this university. `}
      </p></div>
    <div className="bg-main text-white p-6 rounded-xl flex items-center justify-center" >Item 4</div>
    <div className="bg-main text-white w-24 p-6 rounded-xl flex items-center justify-center" >Item 5</div>
  </div>
  )
}
export default AboutGrid;