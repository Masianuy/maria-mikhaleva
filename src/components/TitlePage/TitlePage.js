import React from 'react';
import './titlePage.css';

function TitlePage ({title}) {
  return (
    <div className='title-wrap'>
      <h3>{title}</h3>
    </div>
  );
}

export default TitlePage;
