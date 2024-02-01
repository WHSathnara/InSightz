import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Log';
import Signup from './components/pages/Signup';


function App() {
  return (
   <>

        <Router>
        <Navbar />
        
        <Routes>
    
          <Route path='/' element={<Home />}  />
          <Route path='/Login' element={<Login />}/>
          <Route path='/signup' element={<Signup/>}/>
          </Routes>
      </Router>

  </>
  );
}

export default App;
