import React,{ useState } from 'react';
import Header from './components/NavPanel/Header'
import HowGameCont from './components/NavPanel/Content/HGameC'
import RecordCont from './components/NavPanel/Content/RecodC'
import NavPanelData from './components/Data/NalPanelData'
import ExpCard from './components/exp/ExpCard'
import LvlPanel from './components/LvlPanel/LvlPanel'
import GameCont from './components/NavPanel/Content/GameC'
import "./App.css"
import "./components/NavPanel/Content/Content.css"


 /*Состояния
    @GameOn - начало игры
    @timer - состояние запуска и остановки таймера
    @GameCont - отвечает за отоброжение контента раздела с игрой
    @GameHow - отвечает за отоброжение раздела с правилами
    @GameRecord - отвечает за отоброжение раздела с рекордами
   */

  /*Вложенные функции
  @GameTimerCheck - отсчет времени до конца игры
  @ContentChange - изменение контента в зависимости от нажатой вкладки в компоненте Header
  @GameStart - функция начала игры
  */
const App = () => {
  const[GameOn, setGameOn] = useState(false);
  const[timer, setTimer] = useState(false);
  const[GameContState, setGameContState] = useState(false);
  const[GameHow,setGameHow] = useState(false);
  const[GameRecord, setGameRecord] = useState(false);

  function GameTimerCheck(){
    setTimeout(() => {
        setTimer(!timer);
        setGameOn(!GameOn);
        }, 
        60000
    )
  };
  //Оптимизировать
  function ContentChange(id){
    setGameContState(false);
    setGameHow(false);
    setGameRecord(false);
    if (id === 0){
      setGameHow(!GameHow);
    } else if (id === 1) {
      setGameContState(!GameContState);
    } else {
      setGameRecord(!GameRecord);
    }
  }
  function GameStart(){
    setGameOn(!GameOn);
    setTimer(!timer);
    GameTimerCheck();
  }

    return(
      <div>
        <Header contentChange = { ContentChange }/>   
        {
          (GameHow)?
          <HowGameCont { ...NavPanelData[0] }/>:
          (GameContState)?
              GameOn && timer?
              <ExpCard />:
              <GameCont GameStart = { GameStart }/>:
          (GameRecord)?
          <RecordCont { ...NavPanelData[2] }/>:
          <LvlPanel/>
        }
      </div>
    )
}


export default App;
