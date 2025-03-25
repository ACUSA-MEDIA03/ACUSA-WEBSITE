const ProfileCard = (e) => {
  return (
    <>
      <div
        className="rounded-tr-[20px] rounded-bl-[20px] flex relative lg:h-[450px] h-[420px] items-end justify-center p-2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${e.image})` }}
      >
        <div className="top-0 left-0 absolute h-full w-full p-2 flex items-end" style={{ background: `rgba(0,0,0,0.3)` }}>
          <div className="border flex items-center flex-col border-white w-full  py-[15px] px-[16px] glassmorphism_white rounded-bl-[13px] rounded-tr-[13px] bottom-0 ">
            <b className="font-rubik text-black text-[20px]">{e.name}</b>
            <p className="font-grotesk text-[red] text-[15px]">{e.position}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
