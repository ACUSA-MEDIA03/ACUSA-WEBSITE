import { useEffect, useRef, useState } from "react";
import Logo from "/Logo/logo.png";
// import Logo2 from "/logo-black.svg";
// import LogoMobile from "/logo_mobile.svg";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiCircleRemove } from "react-icons/ci";
import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

const NavBar = () => {
  const nav = useRef("");
  const navBar = useRef("");
  const currentLocation = useLocation();
  const [active, setActive] = useState("");

  // For The Scroll Effect
  useEffect(() => {
    setActive(currentLocation.pathname.split("/")[1]);
    if (nav.current) {
      window.addEventListener("scroll", () => {
        nav.current.classList.toggle("scrollNav", window.scrollY > 40);
      });
    }
  }, []);
  // Mobile SideNavigation
  const showNav = () => {
    navBar.current.style.display = "flex";
    navBar.current.style.position = "fixed";
  };
  // Mobile SideNavigation
  const removeNav = () => {
    navBar.current.style.display = "none";
  };

  return (
    <div
      className="fixed flex lg:items-center lg:justify-between lg:px-16 lg:py-[20px] p-[20px] z-10 w-full text-white "
      ref={nav}
    >
      <a href="/">
        <img src={Logo} alt="" className="lg:w-[50px] w-[40px] lg:flex" />
      </a>

      <ul
        className={`lg:flex lg:flex-row font-grotesk lg:relative hidden top-0 lg:bg-transparent absolute left-0 lg:w-fit lg:h-fit h-[100lvh] z-30 w-full bg-[#101f82fe] space-x-0 lg:space-x-[50px] flex-col justify-center lg:divide-none divide-secondary divide-y-[1px] motion-preset-slide-left motion-duration-300`}
        ref={navBar}
      >
        <CiCircleRemove
          className=" z-40 text-[50px] hover:text-main-yellow lg:hidden  absolute right-8  top-[40px] cursor-pointer"
          onClick={removeNav}
        />
        <a
          href="/"
          className={`lg:px-0 px-4 lg:hover:bg-none ${
            active === ""
              ? "active text-main-yellow font-[500] hover:bg-secondary lg:bg-transparent lg:text-secondary bg-secondary"
              : ""
          } lg:hover:text-secondary lg:hover:bg-transparent hover:bg-secondary lg:py-2 lg:text-left text-right py-4  pr-[40px]`}
        >
          Home
        </a>
        <a
          href="/about"
          className={`lg:px-0 px-4 lg:hover:bg-none ${
            active === "about"
              ? "active hover:text-main-yellow hover:bg-white lg:bg-transparent lg:text-secondary bg-secondary"
              : ""
          } lg:hover:text-secondary lg:hover:bg-transparent lg:py-2 lg:text-left text-right py-4  pr-[40px]`}
        >
          About Us
        </a>
        <a
          href="/gallery"
          className={`lg:px-0 px-4 lg:hover:bg-none ${
            active === "gallery"
              ? "active hover:text-main-yellow hover:bg-white lg:bg-transparent lg:text-secondary bg-secondary"
              : ""
          } lg:hover:text-secondary lg:hover:bg-transparent hover:bg-secondary lg:py-2 lg:text-left text-right py-4  pr-[40px]`}
        >
          Gallery
        </a>
        <a
          href="/publication"
          className={`lg:px-0 px-4 lg:hover:bg-none ${
            active === "publication"
              ? "active hover:text-main-yellow hover:bg-white lg:bg-transparent lg:text-secondary bg-secondary"
              : ""
          } lg:hover:text-secondary lg:hover:bg-transparent hover:bg-secondary lg:py-2 lg:text-left text-right py-4  pr-[40px]`}
        >
          Publications
        </a>
        <a
          href="/feedback"
          className={`lg:px-0 px-4 lg:hover:bg-none ${
            active === "feedback" ? "" : ""
          } lg:hover:text-secondary lg:hover:bg-transparent hover:bg-secondary lg:py-2 lg:text-left text-right py-4  pr-[40px]`}
        >
          Feedbacks
        </a>
        {/* <a
          href="/payment"
          className={`lg:px-0 px-4 lg:hover:bg-none ${active === 'about' ? '' : ''} lg:hover:text-secondary lg:hover:bg-transparent hover:bg-secondary lg:py-2 lg:text-left text-right py-4  pr-[40px]`}
          
        >
          
          Payments
        </a> */}
      </ul>

      <FaBarsStaggered
        className="bars lg:hidden absolute right-4 text-[30px] cursor-pointer"
        onClick={showNav}
      />
    </div>
  );
};

export default NavBar;
