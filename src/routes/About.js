import React from 'react';
import Menu from '../components/Menu/Menu';
import TitlePage from '../components/TitlePage/TitlePage';
import AboutMe from '../components/AboutMe/AboutMe';

function About () {
  return (
    <>
      <TitlePage title='Про мене' />
      <AboutMe />
      <Menu />
    </>
  );
}

export default About;
