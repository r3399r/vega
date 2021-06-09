import { useEffect } from 'react';
import { init } from 'src/services/spreadsheetService';
import style from './Home.module.scss';

const Home = () => {
  useEffect(() => {
    init();
  }, []);

  return <div className={style.content}>hi</div>;
};

export default Home;
