import React from 'react';
import { Link } from 'react-router-dom';
import LucyImage from '../assets/LucyBeach.png';

function AboutPage() {
  return (
    <div className='TextPage'>
        <h1 className='Headline'>About:<br />Lucy Ciara Herud-Thomassen</h1>
        <img className='InSink' id='Portrait' src={LucyImage}></img>
        <h3 className='Headline'>Me:</h3>
        <p className='TextContents'>Ever since a fateful encounter with scratch programming at the age of 9, I've been in love with coding. When I entered highschool at Elvebakken vgs, I got into an educational course which incorporates both IT trade school classes and normal highschool classes. This taught me not only about the IT trade, but of working hard in a line of education where you have to not only graduate from a highschool, but graduate from a trade school at the same time. Nevertheless, I took Japanese I and II as an elective subject during the evenings, and the discipline I had to develop to juggle all these subjects at the same time allowed me to graduate with 63.6 credits.
          <br /><br />During my last year of highschool, I got some work experience with the wonderful team at Elvebakken Skaperverksted, where I learnt about administrating miscellaneous makerspace equipment, machinery and systems.
          <br /><br />Today I'm studying at the Norwegian University of Science and Technology, working to graduate with a bachelor's in computer engineering, and potentially going even further, while volunteering as an IT-developer at Studentersamfundet i Trondhjem.
          <br /><br />In my free time, I enjoy working on a diverse assort of personal IT projects in a variety of languages, frameworks, libraries and natures. You can find them under <Link to={"/LucyWebsite/projects"}>projects.</Link>
          <br /><br />I'm looking to work with something that can challenge me and help me improve.
        </p>
    </div>
  );
}

export default AboutPage;
