import React from 'react';
import Menu from '../components/Menu/Menu';
import TitlePage from '../components/TitlePage/TitlePage';
import MyProjects from '../components/MyProjects/MyProjects';

function Projects () {
  return (
    <>
      <TitlePage title='Проєкти' />
      <MyProjects />
      <Menu />
    </>
  );
}

export default Projects;
