import React from 'react'
import { useEffect, useRef, useState } from "react";
import '../../styles.css';
import TeamBase from './TeamBase';
import TeamAlter from './TeamAlter';

const TeamHeader = () => {
    let [member, setMember] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        getImages();
    }, [])

    const getImages = async() => {
        let response = await fetch('https://web-production-e20e7.up.railway.app/api/team/');
        let data = await response.json();
        console.log(data);
        setMember(data.results);
    }

    const azazaTeamPhoto = member.filter((elem) => elem.position === 'Team Photo');
    azazaTeamPhoto.sort((a, b) => b.order - a.order);

    const TeamPhoto = azazaTeamPhoto.length > 0 ? azazaTeamPhoto[0].headshot : null;
    
    console.log(azazaTeamPhoto);
    console.log(TeamPhoto);




    const [currentPage, setCurrentPage] = useState('togglePosition');

    const togglePage = () => {
      setCurrentPage(currentPage === 'togglePosition' ? 'toggleVertical' : 'togglePosition');
    };
  

  return (
    <div>
        <div className={`fade-in ${show ? 'visible' : ''}`}>
            <div className="top-all flex justify-center relative max-[815px]:mb-[50px]  max-[515px]:mb-[8vw]">
                <h1 className='absolute font-montserrat -z-50 text-[25vw] font-extrabold text-num_color italic bottom-0 leading-[0]'>2023</h1>
                <div className={`w-[50%] max-[860px]:w-[55%] fade-in ${show ? 'visible' : ''}`}>
                    <img className="" src={TeamPhoto} alt="headshot"></img>
                </div>
                <div className="top-words max-lg relative ml-[34px] max-md:ml-[2vw] max-[815px]:!inline-block">
                    <div className={`slide-in-1 font-extrabold font-montserrat leading-[98%] ${show ? 'visible-word-1' : ''}`}>MEET</div>
                    <div className={`slide-in-2 font-extrabold font-montserrat leading-[98%] ${show ? 'visible-word-2' : ''}`}>OUR</div>
                    <div className={`words-bg slide-in-3 font-extrabold font-montserrat leading-[98%] ${show ? 'visible-word-3' : ''}`}>TEAM</div>
                    <div className="absolute bottom-[-7vw] left-[0%] max-[815px]:left-[-110%] max-[815px]:bottom-[-16vw] max-[640px]:left-[-130%] max-[640px]:bottom-[-20vw] max-[425px]:left-[-140%] whitespace-nowrap">
                    <div className={currentPage === 'togglePosition' ? 'toggleButtonDisabled' : 'toggleButton'} onClick={togglePage}>
                        Position
                    </div>
                    &nbsp;
                    <div className={currentPage === 'toggleVertical' ? 'toggleButtonDisabled' : 'toggleButton'} onClick={togglePage}>
                        Vertical
                    </div>
                </div>
                </div>
            </div>
        </div>
        {currentPage === 'togglePosition' ? <TeamBase/> : <TeamAlter/>}
    </div>
  )
}

export default TeamHeader