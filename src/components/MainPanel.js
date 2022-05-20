import React, { useEffect, useState } from 'react';
import './MainPanel.css';
import apiComunicator from '../data/apiComunicator';
import StarWarsList from './StarWarsList';
import Pages from './Pages';

function MainPanel(props) {
  const [page, setPage] = useState(1);
  const [pagesQty, setPagesQty] = useState(0);
  const [listData, setListData] = useState('');

  const APIAnswer = (data) => {
    setPagesQty(Math.ceil(data.count / 10));
    setListData(data.results);
  };
  const callAPI = apiComunicator('https://swapi.dev/api/', APIAnswer);

  useEffect(() => {
    callAPI(`planets?page=${page}`);
  }, [page]);

  const clickPage = (e) => {
    setPage(e.target.textContent);
  };

  return (
    <div className='panel-cont'>
      <h1>Star Wars Planets:</h1>
      <StarWarsList listData={listData} />
      {listData && <Pages qty={pagesQty} handler={clickPage} />}
    </div>
  );
}

export default MainPanel;
