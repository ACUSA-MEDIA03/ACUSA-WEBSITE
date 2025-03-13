const ProfileCard = (e) => {
  return (
    <>
      <div
        className="rounded-tr-[20px] rounded-bl-[20px] flex relative lg:h-[430px] h-[420px] items-end justify-center p-2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${e.image})` }}
      >
        <div className="border border-white w-full  py-[15px] px-[16px] glassmorphism_white rounded-bl-[13px] rounded-tr-[13px] bottom-0 ">
          <b className="font-rubik text-main text-[22px]">{e.name}</b>
          <p className="font-grotesk text-[red]">{e.position}</p>
        </div>
      </div>
    </>
  );
};


export default ProfileCard