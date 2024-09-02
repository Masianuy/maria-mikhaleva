import React from 'react';
import './aboutMe.css';
import html from '../../image/icons/html.png';
import css from '../../image/icons/css.png';
import js from '../../image/icons/js.png';
import git from '../../image/icons/git.png';
import react from '../../image/icons/react.png';
import redux from '../../image/icons/redux.png';
import nodeJS from '../../image/icons/nodejs.png';
import postgresql from '../../image/icons/postgresql.png';
import mongoDB from '../../image/icons/mongodb.png';
import sequelize from '../../image/icons/sequelize.png';
import figma from '../../image/icons/figma.png';
import illustrator from '../../image/icons/illustrator.png';
import photoshop from '../../image/icons/photoshop.png';

function AboutMe () {
  return (
    <div className='container about'>
      <p>
        <span>Мотивований </span>Junior Fullstack JS developer з
        <span> практичними навичками </span>у web дизайні.
      </p>
      <p>
        В ІТ я потрапила з кінного спорту, де викладала, тренувала коней та
        виступала на змаганнях з конкуру.
      </p>
      <p>
        Досвід викладання дорослим та дітям дав мені гарні
        <span> комунікативні навички, </span>бути гнучкішою в спілкуванні та
        вміння пояснити складне простими словами.
      </p>
      <p>
        Прагнення розвиватись підказали верстати свої pet-проєкти з власного
        <span> бачення «гарного» дизайну </span>та використовувати в них нові
        технології.
      </p>
      <h2 className='title'>Практикую технології:</h2>
      <ul className='technologies-list'>
        <li className='technologies-item'>
          <img src={html} alt='HTML' />
        </li>
        <li className='technologies-item'>
          <img src={css} alt='CSS' />
        </li>
        <li className='technologies-item'>
          <img src={js} alt='JavaScript' />
        </li>
        <li className='technologies-item'>
          <img src={git} alt='git' />
        </li>
      </ul>
      <ul className='technologies-list'>
        <li className='technologies-item'>
          <img src={react} alt='react' />
        </li>
        <li className='technologies-item'>
          <img src={redux} alt='redux' />
        </li>
        <li className='technologies-item'>
          <img src={nodeJS} alt='nodeJS' />
        </li>
      </ul>
      <ul className='technologies-list'>
        <li className='technologies-item'>
          <img src={postgresql} alt='postgresql' />
        </li>
        <li className='technologies-item'>
          <img src={mongoDB} alt='mongoDB' />
        </li>
        <li className='technologies-item'>
          <img src={sequelize} alt='sequelize' />
        </li>
      </ul>
      <ul className='technologies-list'>
        <li className='technologies-item'>
          <img src={photoshop} alt='photoshop' />
        </li>
        <li className='technologies-item'>
          <img src={illustrator} alt='illustrator' />
        </li>
        <li className='technologies-item'>
          <img src={figma} alt='figma' />
        </li>
      </ul>
    </div>
  );
}

export default AboutMe;
