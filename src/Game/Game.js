import React, {useState} from 'react'
import StartButton from './StartButton'
import ExpCard from "../components/exp/ExpCard";

/*Состояния
    @GameOn - начало игры
    @timer - состояние запуска и остановки таймера
   */

/*Вложенные функции
@GameTimerCheck - отсчет времени до конца игры
@ContentChange - изменение контента в зависимости от нажатой вкладки в компоненте Header
@GameStart - функция начала игры
*/
const Game = () => {
    const[GameOn, setGameOn] = useState(false);
    const[timer, setTimer] = useState(false);
    function GameTimerCheck(){
        setTimeout(() => {
                setTimer(!timer);
                setGameOn(!GameOn);
            },
            60000
        )
    }

    function GameStart(){
        setGameOn(!GameOn);
        setTimer(!timer);
        GameTimerCheck();
    }
    return(
        <div>
            {
                (GameOn && timer)?
                    <ExpCard/>:
                    <StartButton GameStart = {GameStart}/>
            }
        </div>
        
    )
};


export default Game