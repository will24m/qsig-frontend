import React from 'react'
import logo from '../../assets/QSIG.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { RiCopyrightLine } from 'react-icons/ri';

import '../../styles.css';

const Footer = () => {
  return (

    <footer className='flex bg-[#f4f7f3] h-24 md:h-28 justify-between w-full'>
    <div className="flex flex-wrap justify-center items-center sm:ml-[5%]">
      <div>
        <img src={logo} alt="QSIG" className="object-scale-down h-8 md:h-12"/>
      </div>
      <div className='flex m-3'>
        <div className="">qsigEmail@example.com</div>
      </div>
    </div>
    <div className="flex justify-center items-center text-3xl md:text-4xl sm:mr-[5%]">
      <div className="m-1"><a href="https://www.instagram.com/queenssig/?hl=en" target="_blank"><AiOutlineInstagram /></a></div>
      <div className="m-1"><a href="https://www.facebook.com/QueensSIG/" target="_blank"><BsFacebook /></a></div>
      <div className="m-1"><a href="https://www.linkedin.com/company/queen-s-student-investors-group/?originalSubdomain=ca" target="_blank"><FaLinkedin /></a></div>
    </div>
    </footer>
  )
}

export default Footer