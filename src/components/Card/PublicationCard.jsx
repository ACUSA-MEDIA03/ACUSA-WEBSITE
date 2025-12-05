const PublicationCard = (e) => {
  return (
    <>
      {/* Card */}
      <div className="basis-[90%] flex lg:flex-row flex-col items-center border-b border-red-500 ">
        {e.image ? 
        <div className="basis-[40%]  flex items-center justify-center h-fit">
          <img src={e.image} alt="" className="object-contain h-[320px] w-full " />
        </div>
          :
          ''
        }
        <div className={`${e.image ? 'basis-[60%]' : ''} flex flex-col justify-center p-4 space-y-5`}>
          {/* Heading */}
          <div className="">
            <h1 className="font-rubik font-[700] text-[21px]">
              {e.header}
            </h1>
            <p className="font-grotesk tracking-[0.32px] text-[13px] text-red-500">
              {e.date} || {e.author}
            </p>
          </div>
          {/* Heading */}

          {/* Body */}
          <p className="text-wrap font-grotesk text-[14px] leading-[26px]">
           {e.description}
          </p>
          {/* Body */}
        </div>
      </div>
      {/* Card */}
    </>
  );
};




export default PublicationCard