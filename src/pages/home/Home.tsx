import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { setMyData } from 'src/services/myDataService';
import style from './Home.module.scss';

const Home = () => {
  const [mySheetId, setMySheetId] = useState<string>();

  useEffect(() => {
    const sheetId: string | null = localStorage.getItem('sheetId');
    if (sheetId !== null) setMySheetId(sheetId);
  }, []);

  useEffect(() => {
    if (mySheetId !== undefined) setMyData(mySheetId);
  }, [mySheetId]);

  const onUrlPaste = (evt: { target: HTMLInputElement }) => {
    const sheetId: string = evt.target.value.split('/')[5];
    setMySheetId(sheetId);
    localStorage.setItem('sheetId', sheetId);
  };

  return (
    <div className={style.content}>
      <Input placeholder="在這裡貼上 Google Sheet 網址" onChange={onUrlPaste} />
      hi
    </div>
  );
};

export default Home;
