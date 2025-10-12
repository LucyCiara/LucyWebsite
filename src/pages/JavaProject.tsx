import React from 'react';
import '../Style.css';
import Background from '../components/Background';
import JavaProjectPage from '../components/JavaProjectPage';

function JavaProject() {
  return (
    <div className="Home">
      <Background></Background>
      <JavaProjectPage></JavaProjectPage>
    </div>
  );
}

export default JavaProject;
