import { FaClock, FaLocationArrow } from "react-icons/fa6";

const EventCards = (e) => {
  return (
    <>
      <div className="lg:flex grid lg:divide-x-1 lg:p-2 p-4 divide-[#ebebebb8] drop-shadow-lg  bg-white text-main rounded-[15px] ">
        <div className="basis-[30%]  lg:p-[20px] lg:grid flex gap-3 items-center lg:place-content-center lg:items-center">
          <b className="font-rubik font-[800] lg:text-4xl text-[27px]">
            {e.date}
            <span className="lg:text-[25px] text-[20px] font-[400]">
              {e.suffix}
            </span>{" "}
          </b>
          <p className="font-rubik font-[600] lg:text-[17px] text-[13px]">
            {e.month}, {e.year}
          </p>
        </div>

        <div className="basis-[70%] flex flex-col justify-center lg:p-[20px] pt-3 gap-y-3">
          <div className="flex justify-start gap-4 font-rubik">
            <p className="flex items-center gap-1">
              <FaClock />
              {e.time}
            </p>
            <p className="flex items-center gap-1">
              <FaLocationArrow />
              {e.location}
            </p>
          </div>

          <p className="font-rubik font-bold lg:text-[30px]">{e.eventTitle}</p>
        </div>
      </div>
    </>
  );
};

export default EventCards;
