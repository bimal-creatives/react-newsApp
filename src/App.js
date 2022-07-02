import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import News from './components/News';



const App = () => {
  return (
   
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<News pagesize={9} country='' category='general' />} />
      <Route path="/business" element={<News pagesize={9} country='' category='business' />} />
      <Route path="/entertainment" element={<News pagesize={9} country='' category='entertainment' />} />
      <Route path="/health" element={<News pagesize={9} country='' category='health' />} />
      <Route path="/science" element={<News pagesize={9} country='' category='science' />} />
      <Route path="/sports" element={<News pagesize={9} country='' category='sports' />} />
      <Route path="/technology" element={<News pagesize={9} country='' category='technology' />} />
      <Route path="/home" element={<News pagesize={9} country='in' category='' />} />
      
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App;
