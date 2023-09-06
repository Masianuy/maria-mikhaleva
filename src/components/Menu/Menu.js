import React from 'react';
import { NavLink } from 'react-router-dom';
import mainPage from './../../image/icons/main.png';
import './menu.css';

function Menu () {
  return (
    <nav>
      <ul className='nav-list'>
        <li className='item'>
          <NavLink to='/maria-mikhaleva'>
            <img src={mainPage} alt='main page' />
          </NavLink>
        </li>
        <li className='item'>
          <NavLink to='/about'>Про мене</NavLink>
        </li>
        <li className='item'>
          <NavLink to='/projects'>Проєкти</NavLink>
        </li>
        <li className='item'>
          <NavLink to='/contacts'>Зв'язатись</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
