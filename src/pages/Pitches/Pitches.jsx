// listing Pitches here


import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
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

const Pitches = () => {

    let [pitchImage, setPitchImage] = useState([]);
    let [pitches, setPitches] = useState([]);
    const [show, setShow] = useState(false);
  
    useEffect(() => {
        setShow(true);
        getPitchImages();
        getPitches();
    }, [])
  
    const getPitchImages = async() => {
      let responseImg = await fetch('http://127.0.0.1:8000/api/pitch/img/');
      let dataImg = await responseImg.json();
      let dataImgResults = dataImg.results;
      const dataImgResultsDisplayIsTrue = dataImgResults.filter((elem) => !elem.display);
      setPitchImage(dataImgResultsDisplayIsTrue);
    }
  
  
    const getPitches = async() => {
      let response = await fetch('http://127.0.0.1:8000/api/pitch/');
      let pitch = await response.json();
      let pitchResults = pitch.results;
      const pitchResultsDisplayIsTrue = pitchResults.filter((elem) => !elem.display);
      setPitches(pitchResultsDisplayIsTrue);
    }

    const swiper = useSwiper();

    const slides = pitchImage.map((pitchImg, pitchImgIndex) => (
        <SwiperSlide key={pitchImgIndex} tag="li">
          <img className="swiper-report-image"src={pitchImg.image} alt={pitchImg.title}></img>
        </SwiperSlide>
      ))

      const currentPage = "pitches";

    return (
        <div>
            <Navbar2 colour="bg_color" currentPage={currentPage}/>
            <div className={`pitch-top pt-[3rem] pb-[5rem] max-[768px]:pt-[2rem] max-[768px]:pb-[3.5rem] fade-in ${show ? 'visible' : ''}`}>
                <div className={`pitch-featured leading-[0] font-montserrat font-bold translate-x-8 italic pitch-featured-slide-in ${show ? 'pitch-featured-visible' : ''}`}>FEATURED</div>
                <div className="pitch-top-title">
                    <div className={`flex justify-end pitch-top-title-1 pitch-top-title-1-slide-in font-extrabold font-montserrat leading-[100%] ${show ? 'pitch-top-title-1-visible' : ''}`}>OUR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className='tracking-[11.5px] max-[650px]:tracking-[2vw]'>&nbsp;</div></div>
                    <div className={`pitch-top-title-2 pitch-top-title-2-slide-in font-extrabold font-montserrat leading-[100%] ${show ? 'pitch-top-title-2-visible' : ''}`}>PITCHES&nbsp;</div>
                </div>
                <div className={`pitch-top-description max-lg:text-[1.25rem] max-sm:text-[1rem] max-[525px]:text-[2.5vw] font-inter pitch-top-description-slide-in ${show ? 'pitch-top-description-visible' : ''}`}>View our featured latest pitch, as well as a collection of past pitches from our team.</div>
            </div>

            <div className={`swiper-report-stuff`}>
                <div className={`swiper-button-next-pitch-backward fade-in ${show ? 'visible' : ''}`}><IoIosArrowBack className="arrow-backward"/></div>
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
                            className={`w-[60%] max-md:w-[80%] max-sm:w-[95%] h-auto fade-in ${show ? 'visible' : ''}`}
                            >
                            {slides}
                        </Swiper>
                <div className={`swiper-button-next-pitch-forward`}><IoIosArrowForward className="arrow-forward"/></div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="past-reports flex flex-col items-center">
                <div className="past-reports-title font-montserrat font-extrabold">Past Pitches</div>
                <div className=" max-w-[1440px] flex flex-wrap items-center justify-center gap-[56px] mb-[50px] max-[1230px]:gap-[30px] max-lg:flex-wrap max-[577px]:mb-[25px]">
                    {
                        pitches.map((p, pIndex) => (
                        // <div key={pIndex} className="past-report-item">
                        //     <a href={p.pdf} target="_blank" className="past-report-link">
                        //         <img src={p.cover} className="past-report-image"></img>
                        //         <div className="past-report-overlay"></div>
                        //     </a>
                        //     <div className="past-report-name">
                        //     {p.title}
                        //     </div>
                        // </div>
                        <div key={pIndex}>
                            <div className='flex flex-col items-center'>
                                <a href={p.pdf} target="_blank" className='group relative overflow-hidden w-[361px] h-[248px] max-[1230px]:w-[300px] max-[1230px]:h-[206px] max-md:w-[245px] max-md:h-[168px] max-[577px]:w-[90%] max-[577px]:px-[10vw] max-xsm:px-[7.5vw] max-xsm:h-[140px] rounded-[20px] bg-card_color flex justify-center items-center'>
                                    <div className="absolute w-full h-full opacity-0 transition-opacity bg-bg_color group-hover:opacity-75"></div>
                                    <img src={p.cover} className='w-[80%] mix-blend-multiply' alt="" />
                                </a>
                                <a href={p.pdf} target="_blank" className="font-poppins italic text-p_color font-medium text-[20px] pt-[12px] transition-colors hover:text-comp">
                                    {p.title}
                                </a>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
            <Footer2/>
        </div>
    )
}

export default Pitches