// Similar to Pitches, listing Reports here

import React from 'react'
import { useState, useEffect } from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import Footer2 from '../../components/Footer/Footer2';
import '../../styles.css';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from 'react-icons/io';

// swiper
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);
// SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const Reports = () => {

  let [reportImage, setReportImage] = useState([]);
  let [reports, setReports] = useState([]);
  let [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    getReportImages();
    getReports();
  }, [])

  const getReportImages = async() => {
    let responseImg = await fetch('https://web-production-9cae5.up.railway.app/api/report/img/');
    let dataImg = await responseImg.json();
    let dataImgResults = dataImg.results;
    const dataImgResultsDisplayIsTrue = dataImgResults.filter((elem) => !elem.display);
    setReportImage(dataImgResultsDisplayIsTrue);
  }


  const getReports = async() => {
    let response = await fetch('https://web-production-9cae5.up.railway.app/api/report/');
    let report = await response.json();
    let reportResults = report.results;
    const reportResultsDisplayIsTrue = reportResults.filter((elem) => !elem.display);
    setReports(reportResultsDisplayIsTrue);
  }

  const swiper = useSwiper();

  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = reportImage.map((reportImg, reportImgIndex) => (
    <SwiperSlide key={reportImgIndex} tag="li">
      <img className="swiper-report-image"src={reportImg.image} alt={reportImg.title}></img>
    </SwiperSlide>
  ))
  console.log(slides)

  const pastReports = reports.map((r, rIndex) => (
    <div key={rIndex}>
      <div>{r.pdf}</div>
    </div>
  ))

  const currentPage = "reports";

  return (
    <div>
      <Navbar2 colour="bg_color" currentPage={currentPage}/>
      <div className={`report-top fade-in ${show ? 'visible' : ''}`}>
      <div className={`report-featured leading-[0] font-montserrat font-bold translate-x-8 italic report-featured-slide-in ${show ? 'report-featured-visible' : ''}`}>FEATURED</div>
        <div className="text-[6.875rem] flex items-center justify-center max-lg:text-[5.275rem] max-md:text-[4.4rem] max-sm:text-[11vw]">
          <div className={`report-top-title-1-slide-in font-extrabold font-montserrat leading-[115%] ${show ? 'report-top-title-1-visible' : ''}`}>OUR&nbsp;</div>
          <div className={`report-background report-top-title-2-slide-in font-extrabold font-montserrat leading-[115%] ${show ? 'report-top-title-2-visible' : ''}`}>REPORTS</div>
        </div>
        <div className={`report-top-description max-lg:text-[1.25rem] max-sm:text-[1rem] max-[425px]:text-[12px] max-[425px]:px-[10%] report-top-descripton-slide-in font-inter ${show ? 'report-top-descripton-visible' : ''}`}>View our featured latest report, or view a selection of reports from our team</div>
      </div>

      <div className={`swiper-report-stuff`}>
        <div className={`swiper-button-prev fade-in ${show ? 'visible' : ''}`}><IoIosArrowBack className="arrow-backward"/></div>
        <div>
          <Swiper
            // thumbs={{ swiper: thumbsSwiper }}
            // controller={{ control: controlledSwiper }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            tag="section"
            wrapperTag="ul"
            navigation={{
              prevEl: '.arrow-backward',
              nextEl: '.arrow-forward',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              type: 'bullets',
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            onInit={(swiper) => console.log('Swiper initialized!', swiper)}
            onSlideChange={(swiper) => {
              console.log('Slide index changed to: ', swiper.activeIndex);
            }}
            onSwiper={(swiper) > console.log(swiper)}
            onReachEnd={() => console.log('Swiper end reached')}
            className={`fade-in ${show ? 'visible' : ''}`}
            >
              {slides}
          </Swiper>
        </div>
        <div className={`swiper-button-next fade-in ${show ? 'visible' : ''}`}><IoIosArrowForward className="arrow-forward"/></div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="past-reports">
        <div className="past-reports-title font-montserrat font-extrabold">Past Reports</div>
        {/* <div className="past-report-container">
          {
            reports.map((r, rIndex) => (
              <div key={rIndex} className="past-report-item">
                  <a href={r.pdf} target="_blank" className="past-report-link">
                    <img src={r.cover} className="past-report-image"></img>
                    <div className="past-report-overlay"></div>
                  </a>
                <div className="past-report-name">
                  {r.title}
                </div>
              </div>
            ))
          }
        </div> */}
        <div className=" max-w-[1040px] mx-auto flex flex-wrap items-center justify-center gap-[56px] mb-[50px] max-[1230px]:gap-[30px] max-lg:flex-wrap max-[577px]:mb-[25px]">
          {
              reports.map((r, rIndex) => (
              <div key={rIndex}>
                  <div className='flex flex-col items-center'>
                      <a href={r.pdf} target="_blank" className='group relative overflow-hidden w-[361px] h-[248px] max-[1230px]:w-[300px] max-[1230px]:h-[206px] max-md:w-[245px] max-md:h-[168px] max-[577px]:w-[90%] max-[577px]:px-[10vw] max-xsm:px-[7.5vw] max-xsm:h-[140px] rounded-[20px] bg-card_color flex justify-center items-center'>
                          <div className="absolute w-full h-full opacity-0 transition-opacity bg-bg_color group-hover:opacity-75"></div>
                          <img src={r.cover} className='w-[80%] mix-blend-multiply' alt="" />
                      </a>
                      <a href={r.pdf} target="_blank" className="font-poppins italic text-p_color font-medium text-[20px] pt-[12px] transition-colors hover:text-comp">
                      {r.title}
                      </a>
                  </div>
              </div>
              ))
          }
      </div>
      </div>
      <Footer2 />
    </div>
  )
}

export default Reports