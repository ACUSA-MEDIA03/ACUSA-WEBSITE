const ProfileCard = (e) => {
    return (
      <>
        <div
          className="rounded-[20px] relative lg:h-[400px] h-[270px]  justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: `url(${e.image})` }}
        >
          <div className="top-0 left-0 absolute h-full w-full p-2 flex items-end" style={{ background: `rgba(0,0,0,0.3)` }}>
            <div className="border flex items-center flex-col border-white w-full py-[10px] px-[11px]   lg:py-[15px] lg:px-[16px] glassmorphism_white rounded-[7px] lg:rounded-bl-[13px] lg:rounded-tr-[13px] bottom-0 ">
              <b className="font-rubik text-black text-[16px] lg:text-[20px]">{e.name}</b>
              <p className="font-grotesk text-[red] text-[8px] lg:text-[15px]">{e.position}</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ProfileCard;
  