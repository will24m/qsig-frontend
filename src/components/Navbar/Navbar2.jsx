import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

import qsig_logo from '../../assets/qsig_logo.svg';

const Navbar2 = (props) => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const { currentPage } = props

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(prev => !prev);
  };

  return (
    <div className='flex max-w-[1194px] mx-auto font-lato text-[20px] text-logo_color justify-between pt-[50px] px-[5%]'>
        <div className='flex items-center justify-between'>
            <img className='h-[60px] mr-[144px] max-lg:mr-[5vw] z-30 max-sm:h-[45px]' src={qsig_logo} alt="" />
            <div className='flex items-center gap-[45px] max-lg:gap-[3vw] max-md:hidden'>
                <a href="/" className={`${currentPage==='home' ? 'pointer-events-none opacity-60' : ''} hover-underline-animation transition-all hover:text-primary`}>Home</a>
                <a href="/pitches" className={`${currentPage==='pitches' ? 'pointer-events-none opacity-60' : ''} hover-underline-animation transition-all hover:text-primary`}>Pitches</a>
                <a href="/reports" className={`${currentPage==='reports' ? 'pointer-events-none opacity-60' : ''} hover-underline-animation transition-all hover:text-primary`}>Reports</a>
                <a href="/team" className={`${currentPage==='team' ? 'pointer-events-none opacity-60' : ''} hover-underline-animation transition-all hover:text-primary`}>Team</a>
            </div>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1JPPLSMPuW7rda2_HR7cNwTGr-aTm-zISV7hsy7RrkxpDpA/viewform" target="_blank" className={`max-md:hidden group relative flex items-center justify-center w-[147px] h-[54px] bg-${props.colour} rounded-[40px] transition-all duration-[250ms] ease-out overflow-hidden`}>
            <div className="absolute inset-0 w-0 bg-logo_color transition-all duration-[250ms] ease-out group-hover:w-full max-md:hidden"></div>
            <p className='group-hover:text-white transition-all duration-[250ms] ease-out relative'>Apply</p>
            <FiSend className='ml-[9px] pt-[2px] text-[20px] group-hover:rotate-[40deg] group-hover:text-white transition-all duration-[250ms] ease-out' />
        </a>

        <div className='justify-center items-center text-[40px] hidden max-md:flex z-50 max-sm:text-[30px]'>
          <button onClick={onClick}><HiOutlineMenuAlt3 className={`z-50 hidden max-md:block  ${isActive ? 'max-md:hidden transition-all' : 'max-md:block'}`} alt="hamburger-menu" /></button>
          <button onClick={onClick}><CgClose className={`z-50 text-white ${isActive ? 'max-md:block fixed top-[60px] right-[5%] transition-all' : 'max-md:hidden'}`} alt="close" /></button>
        </div>
        <div className={`fixed top-0 left-0 flex flex-col z-40 justify-center items-center bg-black w-screen transition-[height] md:hidden	${isActive ? 'z-40 h-screen transition-[height]' : 'h-0'}`}>
          <div className='fixed left-[7%] top-[60px]'>
            <div className={`flex text-white text-[64px] leading-[64px] flex-col transition-all`}>
                  <a className={`transition-all hover:text-primary ${isActive ? 'transition-all ease-in-out duration-500 translate-y-0 opacity-100 delay-[100ms]' : 'translate-y-12 opacity-0'}`} href="/">Home</a>
                  <a className={`transition-all hover:text-primary ${isActive ? 'transition-all ease-in-out duration-500 translate-y-0 opacity-100 delay-[150ms]' : 'translate-y-12 opacity-0'}`} href="/pitches">Pitches</a>
                  <a className={`transition-all hover:text-primary ${isActive ? 'transition-all ease-in-out duration-500 translate-y-0 opacity-100 delay-[200ms]' : 'translate-y-12 opacity-0'}`} href="/reports">Reports</a>
                  <a className={`transition-all hover:text-primary ${isActive ? 'transition-all ease-in-out duration-500 translate-y-0 opacity-100 delay-[250ms]' : 'translate-y-12 opacity-0'}`} href="/team">Team</a>
            </div>
          </div>
            <div className={`fixed bottom-[50px]`}>
              <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf1JPPLSMPuW7rda2_HR7cNwTGr-aTm-zISV7hsy7RrkxpDpA/viewform" className={`group flex items-center justify-center  h-[54px] bg-white ease-out overflow-hidden ${isActive ? 'transition-all w-[90vw] delay-[125ms]' : 'w-0'}`}>
                <div className="absolute inset-0 h-0 bg-primary transition-all duration-[250ms] ease-out group-hover:h-full"></div>
                <p className='group-hover:text-white transition-all duration-[250ms] ease-out relative'>Apply</p>
                <FiSend className='ml-[9px] pt-[2px] text-[20px] group-hover:rotate-[40deg] group-hover:text-white transition-all duration-[250ms] ease-out' />
              </a>
            </div>
        </div>
        {/* <div onClick={onClick} className={`w-[100vw] h-[100vh] bg-dark fixed top-0 left-0 z-20 opacity-0 ${isActive ? 'md:opacity-50 transition-opacity' : 'opacity-0 -z-50'}`}></div> */}
    </div>
  )
}

export default Navbar2