import React from 'react'
import { BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs';
import qsig_logo from '../../assets/qsig_logo.svg';


const Footer2 = () => {
  return (
    <div className='bg-background'>
        <div className='h-[150px] max-sm:h-[175px] max-xsm:h-[225px] font-lato flex max-sm:flex-col max-sm:justify-center max-sm:gap-2 justify-between items-center max-w-[1194px] mx-auto text-[20px] text-center max-lg:text-[16px] text-logo_color leading-[98.4%] px-[5%]'>
            <div className='flex items-center max-xsm:flex-col max-sm:gap-2'>
                <img className='h-[60px] mr-[27px] max-sm:h-[45px]' src={qsig_logo} alt="" />
                <p className='mr-3'>© QSIG 2023.</p>
            </div>
            <div className='flex items-center max-xsm:flex-col max-sm:gap-5'>
                <p>terms & conditions  |  privacy policy </p>
                <div className='ml-[42px] max-sm:ml-0 flex items-center text-[28px] max-lg:text-[24px] text-logo_color gap-[14px]'>
                <a className='hover:text-primary' href="https://www.instagram.com/queenssig/?hl=en" target="_blank"><BsInstagram /></a>
                <a className='hover:text-primary' href="https://www.facebook.com/QueensSIG/" target="_blank"><BsFacebook /></a>
                <a className='hover:text-primary' href="https://www.linkedin.com/company/queen-s-student-investors-group/?originalSubdomain=ca" target="_blank"><BsLinkedin /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer2
