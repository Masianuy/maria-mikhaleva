import React from 'react';
import { Link } from 'react-router-dom';
import gitHub from './../../image/icons/github-dark.png';
import website from './../../image/icons/www.png';
import link from './../../image/icons/link-dark.png';
import './myProjects.css';

function MyProjects () {
  return (
    <div className='container'>
      <div className='projects'>
        <div className='project project-low'>
          <div className='project-tech'>
            <p>ReactJS, Router, Formik, Yup</p>
            <p>Lower company</p>
          </div>
          <div className='project-img project-img-low'></div>
          <div className='project-links'>
            <Link to='https://masianuy.github.io/law-company/' target="_blank">
              <img src={website} alt='website' className='www' />
              <span>Website</span>
              <img src={link} alt='link' className='link' />
            </Link>
            <Link to='https://github.com/Masianuy/law-company' target="_blank">
              <img src={gitHub} alt='GitHub' className='www' />
              <span>GitHub</span>
              <img src={link} alt='link' className='link' />
            </Link>
          </div>
        </div>
        <div className='project project-petsfinder'>
          <div className='project-tech'>
            <p>ReactJS, Router, Redux Toolkit, Formik, Yup, Swiper</p>
            <p>Pets finder</p>
          </div>
          <div className='project-img project-img-petsfinder'></div>
          <div className='project-links'>
            <Link to='https://masianuy.github.io/pet_finder/' target="_blank">
              <img src={website} alt='website' className='www' />
              <span>Website</span>
              <img src={link} alt='link' className='link' />
            </Link>
            <Link to='https://github.com/Masianuy/pet_finder' target="_blank">
              <img src={gitHub} alt='GitHub' className='www' />
              <span>GitHub</span>
              <img src={link} alt='link' className='link' />
            </Link>
          </div>
        </div>
        <div className='project project-idealHouse'>
          <div className='project-tech'>
            <p>HTML, CSS, JavaScript</p>
            <p>Ideal House</p>
          </div>
          <div className='project-img project-img-idealHouse'></div>
          <div className='project-links'>
            <Link to='https://masianuy.github.io/ideal_house/index.html' target="_blank">
              <img src={website} alt='website' className='www' />
              <span>Website</span>
              <img src={link} alt='link' className='link' />
            </Link>
            <Link to='https://github.com/Masianuy/ideal_house/' target="_blank">
              <img src={gitHub} alt='GitHub' className='www' />
              <span>GitHub</span>
              <img src={link} alt='link' className='link' />
            </Link>
          </div>
        </div>
        <div className='project project-interior-design'>
          <div className='project-tech'>
            <p>HTML, CSS, JavaScript (for WordPress)</p>
            <p>Interior design</p>
          </div>
          <div className='project-img project-img-interior-design'></div>
          <div className='project-links'>
            <Link to='https://masianuy.github.io/interior_design/' target="_blank">
              <img src={website} alt='website' className='www' />
              <span>Website</span>
              <img src={link} alt='link' className='link' />
            </Link>
            <Link to='https://github.com/Masianuy/interior_design' target="_blank">
              <img src={gitHub} alt='GitHub' className='www' />
              <span>GitHub</span>
              <img src={link} alt='link' className='link' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
