import React from 'react';
import './Pages.css';

function Pages({ qty, handler }) {
  const markup = [];

  for (let x = 1; x <= qty; x++) {
    markup.push(
      <span key={x} onClick={handler}>
        {x}
      </span>
    );
  }

  return <div className='pages-cont'>{markup.length && markup}</div>;
}

export default Pages;
