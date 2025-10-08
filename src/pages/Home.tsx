import React from 'react';
import Background from '../components/Background';
import '../Style.css';
import HomePage from '../components/HomePage';

function Home() {
  return (
    <div className="Home">
      <Background></Background>
      <HomePage></HomePage>
    </div>
  );
}

export default Home;
