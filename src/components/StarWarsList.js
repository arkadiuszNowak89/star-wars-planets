import React, { useEffect, useState } from 'react';
import './StarWarsList.css';

function StarWarsList({ listData }) {
  const [targetPlanet, setTargetPlanet] = useState('');

  useEffect(() => {
    setTargetPlanet('');
  }, [listData]);

  const createMarkup = () => {
    if (!listData) return '';

    return listData.map((el, i) => {
      return (
        <li key={el.name + i} data-i={i} onClick={clickPlanet}>
          {el.name}
          {targetPlanet === `${i}` && (
            <div onClick={closePlanet} className='info-cont'>
              <p>
                <span>Climate:</span> {el.climate}
              </p>
              <p>
                <span>Rotation period:</span> {el.rotation_period}
              </p>
              <p>
                <span>Diameter:</span> {el.diameter}
              </p>
              <p>
                <span>Found in films:</span> {el.films.length}
              </p>
              <p>
                <span>Gravity:</span> {el.gravity}
              </p>
              <p>
                <span>Surface_water:</span> {el.surface_water}
              </p>
              <p>
                <span>Terrain:</span> {el.terrain}
              </p>
              <p>
                <span>Famous residents:</span> {el.residents.length}
              </p>
            </div>
          )}
        </li>
      );
    });
  };

  const clickPlanet = (e) => {
    const index = e.target.dataset.i;
    if (!index) return;
    if (index === targetPlanet) setTargetPlanet('');
    else setTargetPlanet(index);
  };

  const closePlanet = () => {
    setTargetPlanet('');
  };

  return <ul className='star-wars-list'>{createMarkup()}</ul>;
}

export default StarWarsList;
