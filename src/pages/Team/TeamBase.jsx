import React from 'react'
import { useEffect, useRef, useState } from "react";
import '../../styles.css';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer2 from '../../components/Footer/Footer2';



function TeamBase() {

    let [member, setMember] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getImages();
        setShow(true);
    }, [])

    const getImages = async() => {
        let response = await fetch('http://127.0.0.1:8000/api/team/');
        let data = await response.json();
        console.log(data);
        setMember(data.results);
    }

    console.log("hello");
    console.log(member);
    console.log("goodbye");

    const filterAndSortMembers = (position) => {
        return member
            .filter((elem) => elem.position === position)
            .sort((a, b) => b.order - a.order);
      }

    const ayayaCoChairs = filterAndSortMembers('Co-Chair');
    const ayayaPMD = filterAndSortMembers('PM/Director');
    const ayayaSIA = filterAndSortMembers('Senior Investment Analyst');
    const ayayaJIA = filterAndSortMembers('Junior Investment Analyst');
    const ayayaTeamPhoto = filterAndSortMembers('Team Photo');
    const ayayaNoDisplay = filterAndSortMembers('No Display');


    const firstHeadshot = member.length > 0 ? member[0].headshot : null;
    
    console.log(firstHeadshot)

    const teamHeadshot = member.length > 0 ? member[0].headshot : null;

    console.log(teamHeadshot)

    const handleLinkClick = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offset = 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: targetPosition - offset,
            behavior: 'smooth'
        });
    }; 
        

  return (
    <div className={`fade-in ${show ? 'visible' : ''}`}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


        <div className="control-all">
            <ul className="control-all-ul">
                {ayayaCoChairs.length > 0 && (<li className="control-all-li font-lato"><a href="#co-chair" onClick={handleLinkClick}>Co Chair</a></li>)}
                {ayayaCoChairs.length > 0 && (<div>&bull;</div>)}
                {ayayaPMD.length > 0 && (<li className="control-all-li font-lato"><a href="#director" onClick={handleLinkClick}>PM/Director</a></li>)}
                {ayayaPMD.length > 0 && (<div>&bull;</div>)}
                {ayayaSIA.length > 0 && (<li className="control-all-li font-lato"><a href="#sia" onClick={handleLinkClick}>SIA</a></li>)}
                {ayayaSIA.length > 0 && (<div>&bull;</div>)}
                {ayayaJIA.length > 0 && (<li className="control-all-li font-lato"><a href="#jia" onClick={handleLinkClick}>JIA</a></li>)}
            </ul>
        </div>
        
        {
            ayayaCoChairs.length > 0 && (
                <div>
                    <div className="bar-co-chair bar-all font-poppins font-[550] z-20" id="co-chair">
                        <p className='z-20'>Co-Chairs</p>
                        <div className="bar-co-chair-td z-[10]">
                        </div>
                    </div>
                    <div className="co-chair">
                        {
                            ayayaCoChairs.map((cc, ccIndex) => (
                                <div key={ccIndex} className="team-item-cc">
                                    <img className="team-image" src={cc.headshot} alt="headshot"></img>
                                    <div className="team-info">
                                        <div className="team-words">
                                            <p className="team-text-1">{cc.first_name} {cc.last_name}</p>
                                            <p className="team-text-2">{cc.custom_vertical ? cc.custom_vertical : cc.vertical}</p>
                                            <p className="team-text-4">{member.company}</p>
                                            <p className="team-text-3">{cc.year}</p>
                                        </div>
                                        {
                                            cc.LinkedIn ? (
                                                <div className="team-icon">
                                                    <a href={cc.LinkedIn}><FontAwesomeIcon icon={faLinkedin} className="team-actual-icon hover:text-[#0072b1]"/></a>
                                                </div>
                                            ) : (
                                                <div className="team-icon">
                                                    <FontAwesomeIcon icon={faLinkedin} className="team-actual-icon text-[#4f4f4f]"/>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        }
        {
            ayayaPMD.length > 0 && (
                <div>
                    <div className="bar-director bar-all font-poppins font-[550]" id="director">
                        <p className='z-20'>PM/Directors</p>
                        <div className="bar-director-td z-10">
                        </div>
                    </div>
                    <div className="director">
                        {
                            ayayaPMD.map((pmd, pmdIndex) => (
                                <div key={pmdIndex} className="team-item">
                                    <img className="team-image" src={pmd.headshot} alt="headshot"></img>
                                    <div className="team-info">
                                        <div className="team-words">
                                            <p className="team-text-1">{pmd.first_name} {pmd.last_name}</p>
                                            <p className="team-text-2">{pmd.custom_vertical ? pmd.custom_vertical : pmd.vertical}</p>
                                            <p className="team-text-4">{member.company}</p>
                                            <p className="team-text-3">{pmd.year}</p>
                                        </div>
                                        {
                                            pmd.LinkedIn ? (
                                                <div className="team-icon">
                                                    <a href={pmd.LinkedIn}><FontAwesomeIcon icon={faLinkedin} className="team-actual-icon hover:text-[#0072b1]"/></a>
                                                </div>
                                            ) : (
                                                <div className="team-icon">
                                                    <FontAwesomeIcon icon={faLinkedin} className="team-actual-icon text-[#4f4f4f]"/>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        }
        {
            ayayaSIA.length > 0 && (
                <div>
                    <div className="bar-sia-all bar-all font-poppins font-[550]">
                    <div className="bar-sia" id="sia">Senior<div className="bar-sia-td-1"></div></div>
                    <div className="bar-sia" id="sia">Investment<div className="bar-sia-td-2"></div></div>
                    <div className="bar-sia" id="sia">Analysts<div className="bar-sia-td-3"></div></div>
                </div>
                <div className="sia">
                    {
                        ayayaSIA.map((sia, siaIndex) => (
                            <div key={siaIndex} className="team-item-2">
                                <img className="team-image" src={sia.headshot} alt="headshot"></img>
                                <div className="team-info">
                                    <div className="team-words">
                                        <p className="team-text-1-2">{sia.first_name} {sia.last_name}</p>
                                        <p className="team-text-2-2">{sia.custom_vertical ? sia.custom_vertical : sia.vertical}</p>
                                        <p className="team-text-4-2">{member.company}</p>
                                        <p className="team-text-3-2">{sia.year}</p>
                                    </div>
                                    {
                                            sia.LinkedIn ? (
                                                <div className="team-icon">
                                                    <a href={sia.LinkedIn}><FontAwesomeIcon icon={faLinkedin} className="team-actual-icon hover:text-[#0072b1]"/></a>
                                                </div>
                                            ) : (
                                                <div className="team-icon">
                                                    <FontAwesomeIcon icon={faLinkedin} className="team-actual-icon text-[#4f4f4f]"/>
                                                </div>
                                            )
                                        }
                                </div>
                            </div>
                        ))
                    }
                </div>
                </div>
            )
        }
        {
            ayayaJIA.length > 0 && (
                <div>
                     <div className="bar-jia-all bar-all font-poppins font-[550]">
                    <div className="bar-jia" id="jia">Junior<div className="bar-jia-td-1"></div></div>
                    <div className="bar-jia" id="jia">Investment<div className="bar-jia-td-2"></div></div>
                    <div className="bar-jia" id="jia">Analysts<div className="bar-jia-td-3"></div></div>
                </div>
                <div className="jia">
                {
                        ayayaJIA.map((jia, jiaIndex) => (
                            <div key={jiaIndex} className="team-item-2">
                                <img className="team-image" src={jia.headshot} alt="headshot"></img>
                                <div className="team-info">
                                    <div className="team-words">
                                        <p className="team-text-1-2">{jia.first_name} {jia.last_name}</p>
                                        <p className="team-text-2-2">{jia.custom_vertical ? jia.custom_vertical : jia.vertical}</p>
                                        <p className="team-text-4-2">{member.company}</p>
                                        <p className="team-text-3-2">{jia.year}</p>
                                    </div>
                                    {
                                        jia.LinkedIn ? (
                                            <div className="team-icon">
                                                <a href={jia.LinkedIn}><FontAwesomeIcon icon={faLinkedin} className="team-actual-icon hover:text-[#0072b1]"/></a>
                                            </div>
                                        ) : (
                                            <div className="team-icon">
                                                <FontAwesomeIcon icon={faLinkedin} className="team-actual-icon text-[#4f4f4f]"/>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                </div>
            )
        }
        <div className="m-10"></div>
    <Footer2 className={`fade-in ${show ? 'visible' : ''}`}/>
    </div>
  )
}

export default TeamBase