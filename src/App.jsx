import React from "react";
import {  Route,  Routes } from "react-router-dom";
import { Footer, Header, Main } from "./components";
import Favorites from "./components/layout/pages/Favorites";
import Karzina from './components/layout/pages/Karzina'
import Comparison from './components/layout/pages/Comparison'
import Location from "./components/layout/pages/Location";
import Sales from "./components/layout/pages/Sales";


const App = () => {
  return (
      <div className="app">
          <Header/>

          <Routes>

          <Route path="/" element={ <Main />} />
          <Route path="/favorites" element={ <Favorites/>} />
          <Route path="/karzina" element={ <Karzina/>} />
          <Route path="/comparison" element={ <Comparison/>} />
          <Route path="/location" element={ <Location/>} />
          <Route path="/Sales" element={ <Sales/>} />
    

        </Routes>

          <Footer/>
      </div>
  );
};

export default App;