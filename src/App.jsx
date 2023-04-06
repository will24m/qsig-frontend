import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Pitches from './pages/Pitches/Pitches'
import Reports from './pages/Reports/Reports'
import Team from './pages/Team/Team'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './App.css'
import './styles.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="" element={<Home />}/>
          <Route path="pitches" element={<Pitches />}/>
          <Route path="reports" element={<Reports />}/>
          <Route path="team" element={<Team />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
