const Card = (e) => {
  return (
    <>
      <div className={`basis-[50%] rounded-[10px] ${e.white ? 'bg-[white]' : 'glass' } flex flex-col p-[25px] justify-center space-y-3`}>
        <span
          id="ripple"
          className={`w-[45px] h-[45px] ${e.number == 1 ? 'bg-main' : 'bg-white text-main'} grid place-content-center rounded-full font-rubik-dirt font-[400] text-[20px]`}
        >
             {e.number}
        </span>

        <b className={`${e.number == 1 ? 'text-main' : 'text-white'} font-rubik text-[20px]`}>{e.title}</b>

        <p className={`${e.number == 1 ? 'text-main' : 'text-white'}  text-[13px] font-grotesk`}>
         {e.text}
        </p>
      </div>
    </>
  ); 
};


export default Card;