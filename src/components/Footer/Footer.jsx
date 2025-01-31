import { FaSnapchatGhost } from 'react-icons/fa';
import { FaInstagram, FaLinkedin, FaSnapchat, FaSpotify, FaTwitter, FaWhatsapp } from 'react-icons/fa6';
import { PiSnapchatLogoDuotone } from 'react-icons/pi';

const Footer = () => {
  return (
    <div className="bg-main lg:flex items-center justify-end flex-col">
      <div className="lg:flex lg:w-[70%] p-[20px] items-center lg:p-[40px] lg:space-y-0 space-y-7">
       
        <div className="  text-white space-y-4 w-full flex items-center flex-col text-center ">
          <h2 className="font-grotesk text-[35px] font-semibold">Connect With Us</h2>
          <p className='lg:text-[16px] text-[13px]'>Stay updated on our activities, events, and opportunities to get involved by following us on social media or contacting us directly.</p>
          <ul className="font-grotesk space-y-3">
            <li className='flex items-center gap-2'>
              <a className='border lg:border-[gray] hover:border-[#25d366] hover:bg-[#25d366]  transition-all ease-in-out w-6 h-6 rounded-full grid place-content-center p-[20px]' target="_blank" href="https://wa.link/wuqsov"> <FaWhatsapp /> </a>
              <a className='border lg:border-[gray] hover:border-[#1da1f2] hover:bg-[#1da1f2]  transition-all ease-in-out w-6 h-6 rounded-full grid place-content-center p-[20px]' target="_blank" href="https://twitter.com/acu_lss?s=09"> <FaTwitter /> </a>
              <a className='border lg:border-[gray] hover:border-[#c32aa3] hover:bg-[#c32aa3]  transition-all ease-in-out w-6 h-6 rounded-full grid place-content-center p-[20px]' target="_blank" href="https://www.instagram.com/acu_lss?igsh=MXdoN2VsdmNtdzIycw=="> <FaInstagram /> </a>
              <a className='border lg:border-[gray] hover:border-[#fffb00bb] hover:bg-[#fffb00bb]  transition-all ease-in-out w-6 h-6 rounded-full grid place-content-center p-[20px]' target="_blank" href="https://snapchat.com/t/pPEuaRdE"> <PiSnapchatLogoDuotone /> </a>
              <a className='border lg:border-[gray] hover:border-[#0a66c2] hover:bg-[#0a66c2]  transition-all ease-in-out w-6 h-6 rounded-full grid place-content-center p-[20px]' target="_blank" href="https://www.linkedin.com/company/law-students-society-ajayi-crowther-university/"><FaLinkedin/></a>
              <a className='border lg:border-[gray] hover:border-[#1ed760] hover:bg-[#1ed760]  transition-all ease-in-out w-6 h-6 rounded-full grid place-content-center p-[20px]' target="_blank" href="https://open.spotify.com/episode/0J5FJYFmkcHM6CNn77br2G?si=nQeK9hqcTbygwXzNIJpwIQ"> <FaSpotify/> </a>
              {/* <a className='border lg:border-[gray] hover:border-[#1ed760] hover:bg-[#1ed760]  transition-all ease-in-out w-6 h-6 rounded-full grid place-content-center p-[20px]' target="_blank" href="https://open.spotify.com/episode/0J5FJYFmkcHM6CNn77br2G?si=nQeK9hqcTbygwXzNIJpwIQ"> <PiSnapchatLogoDuotone/> </a> */}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative w-full text-center">
        <hr className="glass w-[100%]" />

        <div className="relative font-grotesk text-white p-[20px]">
          <p className="font-light">Copyright &copy; ACUSA MEDIA. All Rights Reserved</p>
        </div>
      </div>

    </div>
  );
};

export default Footer;
