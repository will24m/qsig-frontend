// Home Page

import React from 'react'
import Navbar2 from '../../components/Navbar/Navbar2';
// import Navbar from '../../components/Navbar/Navbar'
import { Link } from "react-router-dom";
import Footer2 from '../../components/Footer/Footer2';
import Button from '../../components/Button/Button';

import { BsInstagram, BsFacebook, BsLinkedin, BsArrowRightShort } from 'react-icons/bs';

import stock_card from '../../assets/stock_card.png';
import queensLogo from '../../assets/queens_logo.svg';
import arrowCircleDown from '../../assets/arrowcircledown.svg';
import card from '../../assets/card.png';
import dream from '../../assets/dream.png';
import rectCircle from '../../assets/rectcircle.svg';
import scrollCircle from '../../assets/scrollcircle.svg';
import telus from '../../assets/telus.png';
import vertex from '../../assets/vertex.png';



const Home = () => {
  const currentPage = "home";
  return (
    <div>
      <Navbar2 colour="white" currentPage={currentPage}/>
    <div className='w-screen relative pt-[50px] max-md:pt-[20px] max-sm:pt-[10px]'>
      <section className='flex flex-col justify-center items-center'>
        <div className='bg-bg_color w-[850px] h-[1200px] absolute top-[-200px] -z-50 left-[62.3%] rotate-[7.77deg]'></div>
        <div>
          <h2 className='font-poppins text-comp text-[64px] font-semibold max-lg:text-[7vw]'>creating the</h2>
          <div className='font-montserrat uppercase text-[123px] font-extrabold leading-[80%] max-lg:text-[14.4vw]'>
            <h1 className='pb-[15px] max-lg:pb-[1.2vw]'>portfolio</h1>
            <h1>managers</h1>
          </div>
          <div className='flex items-center max-[1075px]:flex-col max-[1075px]:items-start'>
            <h2 className='font-poppins font-bold text-[72px] tracking-[0.09em] max-lg:text-[7.5vw]'>of <span className='uppercase text-secondary italic'>tomorrow</span></h2>
            <div className='bg-black h-[3.2px] w-[122px] mx-[50px] max-[1075px]:hidden'></div>
            <Button text="Join Us" url="https://docs.google.com/forms/d/e/1FAIpQLSf1JPPLSMPuW7rda2_HR7cNwTGr-aTm-zISV7hsy7RrkxpDpA/viewform"/>
          </div>
        </div>
        <div className='relative mt-[50px] max-lg:mt-[20px] flex flex-col items-center px-[5%]'>
          <img className='' src={stock_card} alt="" />
          <div className='absolute top-0 right-[calc(-12px+8%)] flex font-poppins font-semibold leading-[99.5%] text-[24px] max-md:text-[16px] max-sm:text-[12px] text-[#40493B]'>
            <img className='max-md:h-[35px] max-sm:h-[25px]' src={queensLogo} alt="" />
            <p className='ml-[10px] max-md:ml-[5px]'>Queen&apos;s<br></br>University</p>
          </div>
        </div>
      </section>

      <div className='w-screen h-fit bg-background -z-50 pb-[240px] px-[5%] max-md:pb-[175px] max-xsm:pb-[150px]'>
        <section className='max-w-screen-lg mx-auto z-0'>
          <div className='flex justify-center items-center relative'>
            <div className='translate-y-[-95px] flex justify-center max-sm:translate-y-[-75px] max-xsm:translate-y-[-35px]'>
              <div className='bg-background  w-screen'></div>
                <img className='max-md:h-[100px] max-md:w-auto max-xsm:h-[75px] max-xsm:min-w-[658.52px]' src={rectCircle} alt="" />
              <div className='bg-background  w-screen'></div>
            </div>
            <div className='group w-[120px] h-[120px] bg-white rounded-full flex justify-center items-center absolute top-[-154px] max-md:scale-[58%] max-sm:top-[-134px] max-xsm:scale-[45%] max-xsm:top-[-94px]'>
              <img className='absolute bounce2' src={arrowCircleDown} alt="" />
              <img className='absolute spin' src={scrollCircle} alt="" />
            </div>
          </div>

          <div className='translate-y-[-90px] relative max-md:translate-y-[-100px] max-xsm:translate-y-[-50px]'>
          <h1 className='bignum-media  top-[-200px] left-[-110px] max-lg:top-[-175px] max-lg:left-[-95px] max-md:top-[-150px] max-md:left-[-80px] max-sm:top-[-18vw] max-sm:left-[-10vw]'>01</h1>
            <h3 className='h3-media'>About Us</h3>
            <h1 className='font-montserrat font-bold text-[96px] leading-[95.4%] max-lg:text-[82px] max-md:text-[68px] max-sm:text-[10.5vw]'>Queen&apos;s Student<br></br>Investing Group</h1>
            <div className='flex items-center mt-[35px] justify-between max-sm:flex-col-reverse'>
              <div className='w-[62%] max-sm:w-full'>
                <p className='font-inter text-[28px] text-p_color leading-[95.4%] mb-[35px] max-lg:text-[24px] max-md:text-[20px] max-sm:mb-[20px] max-xsm:text-[16px]'>&emsp;QSIG is designed to educate its members in developing financial industry-related through conducting equity research, stock pitches, and industry coverage.<br></br>&emsp;We seek to increase the accessibility and availability of information on the financial sector to aid Queen’s University students of all faculties in their post-graduate endeavours.</p>
                <Button text="Our Team" url="/team"/>
              </div>
              <div className='flex flex-col justify-center items-center bg-card_color rounded-[20px] w-[320px] max-lg:w-[280px] max-lg:h-[225px] h-[266px] ml-[25px] max-md:ml-[20px] max-md:w-[250px] max-md:h-[190px] max-sm:ml-0 max-sm:mb-[30px] max-sm:w-full max-sm:h-fit'>
                <h1 className='text-secondary font-inter font-extrabold text-[96px] max-lg:text-[82px] max-md:text-[68px] max-sm:text-[12vw]'>2016</h1>
                <p className='text-[#8F8E8F] font-inter text-[20px] leading-[95.4%] w-[70%] text-center max-lg:text-[16px] max-sm:text-[12px] max-sm:mb-5'>founded by students for students </p>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-[30px] max-w-screen-lg mx-auto flex flex-col items-center bg-background relative z-0 max-md:mt-[00px]'>
          <h1 className='bignum-media top-[-210px] max-lg:top-[-170px] max-md:top-[-150px] max-sm:top-[-110px] max-xsm:top-[-60px]'>02</h1>
          <h3 className='h3-media'>Our Pitches</h3>
          <div className='flex justify-between items-center max-sm:flex-col'>
            <h1 className='font-montserrat font-bold text-[64px] leading-[95.4%] max-lg:text-[56px] max-md:text-[48px] max-sm:text-[9.5vw] max-sm:mt-[10px]'>Hours of <br className='max-sm:hidden'></br>Research<br></br>and Analysis</h1>
            <p className='font-inter text-[24px] text-p_color leading-[95.4%] w-[42%] max-lg:text-[20px] max-md:text-[16px] max-xsm:text-[12px] max-sm:w-[80%] max-sm:mt-[20px]'>QSIG prides itself on due diligence, hard work, and strong fundamentals. We select only the strongest stock candidates to pitch, based on hours of research and analysis.</p>
          </div>
          <div className='flex items-center justify-center gap-[56px] mt-[80px] mb-[50px] max-[1230px]:gap-[30px] max-lg:flex-wrap-reverse max-lg:mt-[70px] max-md:mt-[50px] max-[577px]:mb-[25px] max-sm:mt-[30px] max-xsm:mt-[20px]'>
            <div className='w-[361px] h-[248px] max-[1230px]:w-[300px] max-[1230px]:h-[206px] max-md:w-[245px] max-md:h-[168px] max-[577px]:w-[90%] max-[577px]:px-[10vw] max-xsm:px-[7.5vw] max-xsm:h-[140px] rounded-[20px] bg-card_color flex justify-center items-center'><img className='w-[80%]' src={telus} alt="" /></div>
            <div className='w-[361px] h-[248px] max-[1230px]:w-[300px] max-[1230px]:h-[206px] max-md:w-[245px] max-md:h-[168px] max-[577px]:w-[90%] max-[577px]:px-[15vw] max-xsm:px-[12.5vw] max-xsm:h-[140px] rounded-[20px] bg-card_color flex justify-center items-center'><img className='w-[67%]' src={vertex} alt="" /></div>
            <div className='w-[361px] h-[248px] max-[1230px]:w-[300px] max-[1230px]:h-[206px] max-md:w-[245px] max-md:h-[168px] max-[577px]:w-[90%] max-[577px]:px-[10vw] max-xsm:px-[7.5vw] max-xsm:h-[140px] rounded-[20px] bg-card_color flex justify-center items-center'><img className='w-[67%] mix-blend-multiply' src={dream} alt="" /></div>
          </div>
          <div className='flex items-center'>
            <Button text="Past Pitches" url="/pitches"/>
            <a href="/reports" className='pl-[43px] font-poppins font-medium text-primary text-[28px] max-lg:text-[24px] max-lg:px-[40px] max-md:text-[20px] max-md:px-[35px] max-sm:text-[16px] max-sm:px-[25px] max-xsm:text-[12px] max-xsm:px-[20px] hover:text-comp transition-colors'>Reports</a>
          </div>
        </section>
      </div>

      <div className='px-[5%]'>
        <section className='max-w-screen-lg mx-auto bg-bg_color flex rounded-[50px] relative z-0 -translate-y-[115px] max-lg:items-center  max-lg:justify-center max-[680px]:rounded-[30px] max-md:-translate-y-[75px]'>
          <h1 className='bignum-media text-[#E9FDE0] top-[-100px] left-[20px] max-lg:top-[-75px] max-lg:left-[20px] max-sm:top-[-50px] max-sm:left-[10px] max-xsm:top-[-25px]'>03</h1>
          <div className='pt-[75px] pl-[88px] w-[100%] max-lg:pt-2 max-lg:pl-[8%] max-[680px]:py-[50px] max-[680px]:flex max-[680px]:flex-col max-[680px]:items-center max-[680px]:pl-0 max-[680px]:text-center'>
                <h1 className='font-montserrat font-bold text-[64px] leading-[95.4%] max-lg:text-[58px] max-[777px]:text-[52px] max-[680px]:px-[10%] max-sm:text-[9.5vw]'>Join Our <br className='max-[680px]:hidden'></br>Team</h1>
                <p className='font-inter text-[24px] text-p_color leading-[95.4%] mt-[30px] w-[90%] max-lg:mt-[20px] max-lg:text-[20px] max-[777px]:text-[16px] max-[680px]:w-[75%]'>Analyst position with our Junior and Senior Investment teams:</p>
                <p className='ml-[43px] font-inter text-[24px] text-comp font-bold leading-[95.4%] my-[42px] max-lg:my-[25px] max-lg:text-[20px] max-[777px]:text-[16px] max-[680px]:ml-0'>Portfolio Manager<br></br>Junior Investment Analyst<br></br>Senior Investment Analyst</p>
                <Button text="Apply" url="https://docs.google.com/forms/d/e/1FAIpQLSf1JPPLSMPuW7rda2_HR7cNwTGr-aTm-zISV7hsy7RrkxpDpA/viewform"/>
          </div>
          <img className='pr-[50px] pt-[93px] max-lg:w-[40%] max-lg:pr-[4%] max-[680px]:hidden' src={card} alt="" />
        </section>
      </div>

      <div className='px-[5%]'>
        <section className='max-w-screen-lg mx-auto relative z-0 flex my-[100px] justify-between max-[888px]:flex-col max-[888px]:mt-0 max-[888px]:mb-[150px] max-xsm:mb-[100px]'>
            <h1 className='bignum-media top-[-210px] left-[-100px] max-lg:top-[-180px] max-[888px]:left-[35%] max-[888px]:top-[-150px] max-md:top-[-100px] max-sm:top-[-60px] max-xsm:top-[-20px]'>04</h1>
            <div className='max-[888px]:pl-[10%] max-md:pl-0'>
              <h3 className='h3-media'>Contact Us</h3>
              <h1 className='font-montserrat font-bold text-[64px] leading-[95.4%] max-lg:text-[56px] max-sm:text-[9.5vw]'>Follow us on<br></br>Social Media</h1>
              <p className='font-inter text-[24px] text-p_color leading-[95.4%] w-[82%] mt-[36px] mb-[48px] max-lg:text-[20px] max-lg:mb-[40px] max-sm:text-[16px] max-sm:mt-[26px] max-sm:mb-[32px]'>The fastest way to see our investment recommendations.</p>
              <div className='flex text-[43px] text-secondary gap-[22px] max-sm:text-[33px] max-sm:gap-[18px]'>
                <a className='hover:text-comp transition-all' href="https://www.instagram.com/queenssig/?hl=en" target="_blank"><BsInstagram /></a>
                <a className='hover:text-comp transition-all' href="https://www.facebook.com/QueensSIG/" target="_blank"><BsFacebook /></a>
                <a className='hover:text-comp transition-all' href="https://www.linkedin.com/company/queen-s-student-investors-group/?originalSubdomain=ca" target="_blank"><BsLinkedin /></a>
              </div>
            </div>
            <form action="https://formsubmit.co/aidankim100@gmail.com" method="POST" className='flex flex-col font-poppins text-[20px] max-sm:text-[16px] text-p_color w-[70%] leading-[85%] translate-y-[-40px] max-[888px]:translate-y-[40px] max-[888px]:mx-auto max-md:w-full'>
              <div className='flex gap-[34px] w-full max-xsm:flex-col'>
                <input className='w-full rounded-[100px] border-comp border-[1px] h-[67px] px-[28px]' type="text" name="fname" placeholder="FIRST NAME" />
                <input className='w-full rounded-[100px] border-comp border-[1px] h-[67px] px-[28px]' name="lname" placeholder="LAST NAME" />
              </div>
              <input className='rounded-[100px] border-comp border-[1px] h-[67px] px-[28px] my-[50px] max-sm:my-[34px]' type="email" name="email" placeholder="EMAIL" />
              <textarea rows="10" className='rounded-[15px] border-comp border-[1px] py-[23px] px-[28px]' name="message" placeholder="MESSAGE" />
              <div className='group mt-[23px] w-fit h-[48px] bg-primary hover:bg-comp flex justify-center items-center rounded-[50px] pl-[20px] pr-[15px]'>
                {/* <p className='font-poppins font-medium text-white text-[20px] max-sm:text-[16px]'>SEND</p> */}
                <input value="SEND" type="submit" className='font-poppins font-medium text-white text-[20px] max-sm:text-[16px]'></input>
                <BsArrowRightShort className='text-white text-[30px] max-sm:text-[26px] transition-all group-hover:translate-x-1'/>
              </div>
            </form>
        </section>
        
      </div>

    </div>
    <Footer2 />
    </div>
  )
}

export default Home