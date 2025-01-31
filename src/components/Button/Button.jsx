const Button = (e) => {
  return (
    <>
      <button className="relative inline-flex items-center justify-center px-[16px] lg:py-[23px] py-[19px] overflow-hidden font-medium text-white transition duration-300 ease-out  group cursor-pointer">
        <span className={`absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full ${e.bgcolor === 'blue' ? 'bg-main-yellow' : 'bg-main'} group-hover:translate-x-0 ease`}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center text-base font-semibold justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease lg:text-[14px] text-[13px]">
          {e.text}
        </span>
      </button>
    </>
  );
};

export default Button;
