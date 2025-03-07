
function AboutGrid() {
  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 py-10 lg:grid-cols-3 grid-rows-2 items-start justify-start gap-6 ">
    <div className="bg-[#505786] text-white  w-24 lg:w-[223px] lg:h-[141px] p-6 rounded-xl items-center " >
    </div>
    <div className="bg-[#0C1657] text-white p-6 rounded-2xl w-92 lg:w-[424px] h-[562px] flex items-center justify-center row-span-2">Items 2</div>
    <div className="bg-[#D49906] p-6 rounded-xl text-[22px] flex items-center justify-center lg:w-[424px] h-[276px]" ><p className="font-grotesk text-white">
      {`ACUSA is a student led organization that is committed to promoting the interests of students in this university. `}
      </p></div>
      
      
      
    <div id="item-4" className="bg-[#0C1657] text-white p-6 rounded-xl flex items-center justify-center w-[424px]  h-[276px] relative " >Item 4</div>
  

    <div className="bg-[#505786] text-white w-24 p-6 rounded-xl flex items-center justify-center lg:w-[223px] lg:h-[141px]" >Item 5</div>
 
  </div>
  
  )
}
export default AboutGrid;