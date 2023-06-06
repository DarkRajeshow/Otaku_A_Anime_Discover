import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Choice from './components/Choice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { createContext, useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer';


export const Contexts = createContext();


function App() {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const [rating, setRating] = useState([]);
  const [status, setStatus] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);

  let handleStart = () => {
    setGenres([])
    setRating([])
    setStatus("")
    setYear("")
    navigate("/Otaku_A_Anime_Discover/step1");
  }

  let NavigateHome = () => {
    setGenres([])
    setRating([])
    setStatus("")
    setYear("")
    navigate("/Otaku_A_Anime_Discover");
  }

  return (
    <Contexts.Provider value={{ genres, setGenres, status, setStatus, rating, setRating, year, setYear, handleStart, NavigateHome, loading, setLoading }}>
      <NavBar />
      <Routes>
        <Route path='/Otaku_A_Anime_Discover' element={<><Home /></>} />
        <Route path='/Otaku_A_Anime_Discover/step1' element={<><Step1 /></>} />
        <Route path='/Otaku_A_Anime_Discover/step2' element={<><Step2 /></>} />
        <Route path='/Otaku_A_Anime_Discover/step3' element={<><Step3 /></>} />
        <Route path='/Otaku_A_Anime_Discover/step4' element={<><Step4 /></>} />
        <Route path='/Otaku_A_Anime_Discover/choice' element={<><Choice /><Footer /></>} />
      </Routes>
      
    </Contexts.Provider>
  );
}

let RouterApp = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default RouterApp;


// step 1 : genres
// step 2 : rating
// step 3 : status
// step 4 : season year 
// choice : 