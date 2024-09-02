import React from 'react';
import { Link } from 'react-router-dom';
import linkedIn from './../../image/icons/linkedin.png';
import facebook from './../../image/icons/facebook.png';
import telegram from './../../image/icons/telegram.png';
import gitHub from './../../image/icons/github.png';
import email from './../../image/icons/mail.png';
import photo from './../../image/sm-photo.jpg';
import './myContacts.css';

function MyContacts () {
  return (
    <div className='container'>
      <div className='contact-grid'>
        <div className='photo-cl'>
          <div className='photo-wrap'>
            <img src={photo} alt='avatar' />
          </div>
        </div>
        <div className='second-cl'>
          <Link to='https://www.linkedin.com/in/%F0%9D%91%80%F0%9D%91%8E%F0%9D%91%9F%F0%9D%91%96%F0%9D%91%8E-%F0%9D%91%80%F0%9D%91%96%F0%9D%91%98%E2%84%8E%F0%9D%91%8E%F0%9D%91%99%F0%9D%91%92%F0%9D%91%A3%F0%9D%91%8E-307661173/'>
            <img src={linkedIn} alt='LinkedIn' />
            <span>LinkedIn</span>
          </Link>
          <Link to='https://www.facebook.com/masianuy/'>
            <img src={facebook} alt='Facebook' />
            <span>Facebook</span>
          </Link>
          <Link to='https://t.me/zinger_13'>
            <img src={telegram} alt='Telegram' />
            <span>Telegram</span>
          </Link>
        </div>
        <div className='third-cl'>
          <Link to='https://github.com/Masianuy'>
            <img src={gitHub} alt='GitHub' />
            <span>GitHub</span>
          </Link>
          <Link to='mailto:mari.mikhaleva.ukr@gmail.com'>
            <img src={email} alt='Email' />
            <span>E-mail</span>
          </Link></div>
      </div>
    </div>
  );
}

export default MyContacts;
