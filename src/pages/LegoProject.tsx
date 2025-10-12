import React from 'react';
import '../Style.css';
import Background from '../components/Background';
import LegoProjectPage from '../components/LegoProjectPage';

function LegoProject() {
  return (
    <div className="Home">
      <Background></Background>
      <LegoProjectPage></LegoProjectPage>
    </div>
  );
}

export default LegoProject;
