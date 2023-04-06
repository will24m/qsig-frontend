import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/QSIG.png';
import { BsSend } from "react-icons/bs"

function Navbar(props) {

  const { currentPage } = props

  const [isScrolled, setIsScrolled] = useState(false);

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(prev => !prev);
  };

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
      <div className={`nav flex h-20 ${isScrolled ? 'lg:h-20' : 'lg:h-32'} border-b-2 border-[#edf7e9] w-full bg-[#f9faf9] sticky top-0 z-50 transition-all duration-300 ease-out`}>
        <input type="checkbox" id="nav-check"></input>
        <div className={`nav-header flex justify-center ml-8 items-center left-16`}>
            <Link className="border-2 border-white" to="/">
              <img className="w-[120px]" src={logo} alt="QSIG Logo"/>
            </Link>
        </div>
        <div className="nav-btn hidden">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      
      <div className="nav-links space-x-10 text-lg flex lg:ml-[22%] mr-auto">
        <Link className={`${currentPage==='home' ? 'pointer-events-none opacity-60' : ''} ml-[2.5rem] mr-auto group transition-all duration-100 ease-in-out hover:text-[#5CB841] flex no-underline text-[#5d7164] justify-center items-center px-2.5 py-[13px]`} to="/">
            <span className={`bg-left-bottom bg-gradient-to-r from-[#b0d8a3] to-[#b0d8a3] bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out`}>
              Home
            </span>
          </Link>
          <Link className={`${currentPage==='pitches' ? 'pointer-events-none opacity-60' : ''} group transition-all duration-100 ease-in-out hover:text-[#5CB841] flex no-underline text-[#5d7164] justify-center items-center px-2.5 py-[13px]`} to="/pitches">
            <span className="bg-left-bottom bg-gradient-to-r from-[#b0d8a3] to-[#b0d8a3] bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
              Pitches
            </span>
          </Link>
          <Link className={`${currentPage==='reports' ? 'pointer-events-none opacity-60' : ''} group transition-all duration-100 ease-in-out hover:text-[#5CB841] flex no-underline text-[#5d7164] justify-center items-center px-2.5 py-[13px]`} to="/reports">
            <span className="bg-left-bottom bg-gradient-to-r from-[#b0d8a3] to-[#b0d8a3] bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
              Reports
            </span>
          </Link>
          <Link className={`${currentPage==='team' ? 'pointer-events-none opacity-60' : ''} group transition-all duration-100 ease-in-out hover:text-[#5CB841] flex no-underline text-[#5d7164] justify-center items-center px-2.5 py-[13px]`} to="/team">
            <span className="bg-left-bottom bg-gradient-to-r from-[#b0d8a3] to-[#b0d8a3] bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
              Team
            </span>
          </Link>
          <Link className="lg: hidden group transition-all duration-100 ease-in-out hover:text-[#5CB841] no-underline text-[#5d7164] justify-center items-center px-2.5 py-[13px]" to="https://docs.google.com/forms/d/e/1FAIpQLSeQZjN-LkKi6nvKIA4lM7VeCxqMhC8UD9zkts-YvThto_vbvQ/viewform" target='_blank'>
            <span className="text-sm sm:text-base bg-left-bottom bg-gradient-to-r from-[#b0d8a3] to-[#b0d8a3] bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
              Market & Trends Analyst Application
            </span>
          </Link>
          <Link className="lg: hidden group transition-all duration-100 ease-in-out hover:text-[#5CB841] no-underline text-[#5d7164] justify-center items-center px-2.5 py-[13px]" to="https://docs.google.com/forms/d/e/1FAIpQLSc305q_0BFROpJDj1Q5tX-ayzuOQweNS_qSSPoMFhG2rA0Mig/viewform" target='_blank'>
            <span className="text-sm sm:text-base bg-left-bottom bg-gradient-to-r from-[#b0d8a3] to-[#b0d8a3] bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
            Investment Analyst Application
            </span>
          </Link>
          
        <div className={`hidden lg:block mt-3 space-y-2 lg:absolute ${isScrolled ? 'top-[3px]' : 'top-[28px]'} right-16 transition-all duration-300 ease-out z-30`}>
            <div
                onClick={handleClick}
                className="inline-block px-8 py-[10px] text-[#5d7164] bg-[#E0F8D5] rounded-[20px] shadow hover:bg-[#b4d5a5] hover:text-[#161716] transition-all duration-300 ease-out">
                <div className='flex'>Apply<BsSend className='mt-[6px] ml-1'/></div>
            </div>
        </div>
      </div>
      {visible &&
        <div className='transition-all duration-700'>
          <div  
                onClick={handleClick}
                className="absolute top-0 left-0 w-screen h-screen bg-[#d6ded2] z-10 opacity-80 transition-opacity duration-700">
          </div>
          <div className="flex flex-col w-[350px] h-auto absolute top-28 right-16 bg-slate-100 rounded-2xl text-center z-20 transition-all duration-700">
            <div className="p-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeQZjN-LkKi6nvKIA4lM7VeCxqMhC8UD9zkts-YvThto_vbvQ/viewform" target="_blank" className="hover:text-[#9db394] active:text-[#a0c48f]">Market & Trends Analyst Applications</a>
            </div>
            <div className="pb-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc305q_0BFROpJDj1Q5tX-ayzuOQweNS_qSSPoMFhG2rA0Mig/viewform" target="_blank" className="hover:text-[#95aa8b] active:text-[#a0c48f]">Investment Analyst Application</a>
            </div>
          </div>
        </div>
      }
    </div>
    );
}

export default Navbar;
