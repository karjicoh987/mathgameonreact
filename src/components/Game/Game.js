import React, {useState} from 'react'
import StartButton from './StartButton'
import ExpCard from "./exp/ExpCard";
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

    function GameStart(){
        setGameOn(!GameOn);
    }

    return(
        <div>
            {
                (GameOn)?
                    <ExpCard/>:
                    <StartButton GameStart = {GameStart}/>
            }
        </div>
        
    )
};


export default Game