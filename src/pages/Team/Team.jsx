import React from 'react'
import Navbar2 from '../../components/Navbar/Navbar2'
import '../../styles.css';
import TeamHeader from './TeamHeader';
import Footer from '../../components/Footer/Footer';
import { useState, useEffect } from 'react';



function Team() {

  const currentPage = "team";

  
  return (
    <div>
        <Navbar2 colour="bg_color" currentPage={currentPage}/>
        <TeamHeader/>
    </div>
  )
}

export default Team