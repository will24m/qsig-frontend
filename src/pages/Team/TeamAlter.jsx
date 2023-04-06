import React from 'react'
import { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import '../../styles.css';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer2 from '../../components/Footer/Footer2';

const TeamAlter = () => {
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

    function getMembersByVertical(members, vertical) {
        const filteredMembers = members.filter((elem) => elem.vertical === vertical);
        filteredMembers.sort((a, b) => b.order - a.order);
        return filteredMembers;
    }
    
    const awawaInvestmentsTeam = getMembersByVertical(member, 'Investments Team');
    const awawaIndustrials = getMembersByVertical(member, 'Industrials');
    const awawaTMT = getMembersByVertical(member, 'Technology, Media & Telecom');
    const awawaCH = getMembersByVertical(member, 'Consumers & Healthcare');
    const awawaEC = getMembersByVertical(member, 'Energy & Commodities');
    const awawaFIRE = getMembersByVertical(member, 'Finance, Insurance & Real Estate');
    const awawaMT = getMembersByVertical(member, 'Market & Trends');
    const awawaAnalytics = getMembersByVertical(member, 'Analytics');
      

    const handleLinkClick = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offset = 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: targetPosition - offset,
            behavior: 'smooth'
        });
    }; 

    function renderTeamMembers(teamMembers) {
        return teamMembers.map((member, index) => (
          <div key={index} className="team-item">
            <img className="team-image" src={member.headshot} alt="headshot" />
            <div className="team-info">
              <div className="team-words">
                <p className="team-text-1">{member.first_name} {member.last_name}</p>
                <p className="team-text-2">{member.custom_vertical ? member.custom_vertical : member.vertical}</p>
                <p className="team-text-4">{member.company}</p>
                <p className="team-text-3">{member.year}</p>
              </div>
                {
                    member.LinkedIn ? (
                        <div className="team-icon">
                            <a href={member.LinkedIn}><FontAwesomeIcon icon={faLinkedin} className="team-actual-icon hover:text-[#0072b1]"/></a>
                        </div>
                    ) : (
                        <div className="team-icon">
                            <FontAwesomeIcon icon={faLinkedin} className="team-actual-icon text-[#4f4f4f]"/>
                        </div>
                    )
                }
            </div>
          </div>
        ));
      }


  return (
    <div className={`fade-in ${show ? 'visible' : ''}`}>

        <div className="control-all-alter">
            {awawaInvestmentsTeam.length > 0 && (<div className="control-all-li-alter font-lato"><a href="#Investments_Team" onClick={handleLinkClick}>Investments Team</a></div>)}
            {awawaInvestmentsTeam.length > 0 && (<p className="dot-character">&bull;</p>)}
            {awawaIndustrials.length > 0 && (<div className="control-all-li-alter font-lato"><a href="#Industrials" onClick={handleLinkClick}>Industrials</a></div>)}
            {awawaIndustrials.length > 0 && (<p className="dot-character">&bull;</p>)}
            {awawaTMT.length > 0 && (<div className="control-all-li-alter font-lato"><a href="#Technology_Media_Telecom" onClick={handleLinkClick}>Technology, Media & Telecom</a></div>)}
            {awawaTMT.length > 0 && (<p className="dot-character">&bull;</p>)}
            {awawaCH.length > 0 && (<div className="control-all-li-alter font-lato"><a href="#Consumers_Healthcare" onClick={handleLinkClick}>Consumers & Healthcare</a></div>)}
            {awawaCH.length > 0 && (<p className="dot-character">&bull;</p>)}
            {awawaEC.length > 0 && (<div className="control-all-li-alter font-lato"><a href="#Energy_Commodities" onClick={handleLinkClick}>Energy & Commodities</a></div>)}
            {awawaEC.length > 0 && (<p className="dot-character">&bull;</p>)}
            {awawaFIRE.length > 0 && (<div className="control-all-li-alter font-lato"><a href="#Finance_Insurance_Real_Estate" onClick={handleLinkClick}>Finance, Insurance & Real Estate</a></div>)}
            {awawaFIRE.length > 0 && (<p className="dot-character">&bull;</p>)}
            {awawaMT.length > 0 && (<div className="control-all-li-alter font-lato"><a href="#Market_Trends" onClick={handleLinkClick}>Market & Trends</a></div>)}
            {awawaMT.length > 0 && (<p className="dot-character">&bull;</p>)}
            {awawaAnalytics.length > 0 && (<div className="control-all-li-alter font-lato"><a href="#Analytics" onClick={handleLinkClick}>Analytics</a></div>)}
        </div>
        {awawaInvestmentsTeam.length > 0 && (
            <div>
                <div className="bar-director bar-all font-poppins font-[550] flex flex-wrap" id="Investments_Team">
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">Investments</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[346px] h-[14px] z-[5] rounded-sm">
                        </div>
                    </div>
                </div>
                <div className="director">{renderTeamMembers(awawaInvestmentsTeam)}</div>
            </div>
        )}
        {awawaIndustrials.length > 0 && (
            <div>
                <div className="bar-director bar-all font-poppins font-[550] flex flex-wrap" id="Industrials">
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">Industrials</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[298px] h-[14px] z-[5] rounded-sm">
                        </div>
                    </div>
                </div>
                <div className="director">{renderTeamMembers(awawaIndustrials)}</div>
            </div>
        )}
        {awawaTMT.length > 0 && (
            <div>
                <div className="bar-director bar-all font-poppins font-[550] flex flex-wrap" id="Technology_Media_Telecom">
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">Technology,</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[321px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">Media</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[178px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">&</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[75px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">Telecom</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[257px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                </div>
                <div className="director">{renderTeamMembers(awawaTMT)}</div>
            </div>
        )}
        {awawaCH.length > 0 && (
            <div>
                <div className="bar-director bar-all font-poppins font-[550] flex flex-wrap" id="Consumers_Healthcare">
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">Consumers</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[306px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">&</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[75px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">HealthCare</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[320px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                </div>
                <div className="director">{renderTeamMembers(awawaCH)}</div>
            </div>
        )}
        {awawaEC.length > 0 && (
            <div>
                <div className="bar-director bar-all font-poppins font-[550] flex flex-wrap" id="Energy_Commodities">
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">Energy</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[201px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">&</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[75px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">Commodities</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[374px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                </div>
                <div className="director">{renderTeamMembers(awawaEC)}</div>
            </div>
        )}
        {awawaFIRE.length > 0 && (
            <div>
                <div className="bar-director bar-all font-poppins font-[550] flex flex-wrap" id="Finance_Insurance_Real_Estate">
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">Finance,</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[230px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">Insurance</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[271px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">&</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[75px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">Real</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[143px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">Estate</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[192px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                </div>
                <div className="director">{renderTeamMembers(awawaFIRE)}</div>
            </div>
        )}
        {awawaMT.length > 0 && (
            <div>
                <div className="bar-director bar-all font-poppins font-[550] flex flex-wrap" id="Market_Trends">
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">Market</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[195px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">&</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[75px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">Trends</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[202px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                </div>
                <div className="director">{renderTeamMembers(awawaMT)}</div> 
            </div>
        )}
        {awawaAnalytics.length > 0 && (
            <div>
                <div className="bar-director bar-all font-poppins font-[550]" id="Analytics">
                    <div className="mx-2 relative">
                        <p className="relative z-[20]">Analytics</p>
                        <div className="absolute bg-[#bbe4ae] top-[1.96rem] left-[-20px] w-[269px] h-[14px] z-[5] rounded-sm"></div>
                    </div>
                </div>
                <div className="director">{renderTeamMembers(awawaAnalytics)}</div>
            </div>
        )}
        <div className="m-10"></div>
    <Footer2 className={`fade-in ${show ? 'visible' : ''}`}/>
    </div>
  )
}

export default TeamAlter