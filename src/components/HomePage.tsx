import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function HomePage() {
  return (
    <div className='TextPage'>
        <h1 className='Headline'>Home</h1>
        <p className='TextContents'>Welcome to Lucy's website! This is the homepage, where you can find:</p>
        <Link to={"/LucyWebsite/projects"} className='TextContents'>
          <Button  className='PopOut' id='Button'>
            <p className='Headline'>My Projects</p>
          </Button>
        </Link>
        <Link to={"/LucyWebsite/about"} className='TextContents'>
          <Button className='PopOut' id='Button'>
            <p className='Headline'>My About-me</p>
          </Button>
        </Link>
    </div>
  );
}

export default HomePage;
