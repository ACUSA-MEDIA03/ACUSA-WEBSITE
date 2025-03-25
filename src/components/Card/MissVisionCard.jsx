const MissVisionCard = (e) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex  flex-col space-y-4 text-center lg:text-start">
      <h4 className="text-main text-[20px] font-rubik-dirt lg:text-[36px] font-[400]">
       {e.header}
      </h4>
      <p className="text-[#aaaaaa] text-center lg:text-start leading-[27px] font-[300] text-[16px] font-rubik ">
        {e.description}
      </p>
    </div>
  );
};


export default MissVisionCard