import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css' ;


function Home() {
  return (
    <>
      
      <div className='home'>
      <h1>Welcome to In-Sightz</h1>
      <p>Unlock the power of unified insights with In-Sightz! One platform, eight social media channels. Effortlessly track, analyze, and optimize your posts. Receive personalized suggestions, schedule with ease, and stay ahead of trends. Perfect for content creators, businesses, and talent showcasing their best. Elevate your social media game -  join In-Sightz today!</p>
      <Link to='/signup' className='butn--outline'>Sign-Up</Link>
      
    </div>
    </>
  );
}

export default Home;