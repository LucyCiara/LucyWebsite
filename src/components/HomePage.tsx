import React from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className='TextPage'>
        <h1 className='Headline'>Home</h1>
        <p className='TextContents'>Welcome to Lucy's website! This is the homepage, where you can find:</p>
        <Link to={"/projects"} className='TextContents'>My projects</Link>
        <Link to={"/about"} className='TextContents'>My about-me</Link>
    </div>
  );
}

export default HomePage;
