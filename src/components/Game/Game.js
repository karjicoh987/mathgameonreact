import React, {useState} from 'react'
import StartButton from './StartButton'
import ExpCard from "../exp/ExpCard";
import Header from "../NavPanel/Header"
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
    setTimeout(() => {
            setTimer(!timer);
            setGameOn(!GameOn);
        },
        60000
    )

    function GameStart(){
        setGameOn(!GameOn);
        setTimer(!timer);
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