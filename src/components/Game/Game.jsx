import React, {useState} from 'react'
import PropTypes from 'prop-types'
import StartButton from './StartButton'
import ExpCard from "./exp/ExpCard";
import WordCard from './Word/WordCard';
/*Состояния
    @GameOn - начало игры
    @timer - состояние запуска и остановки таймера
   */

/*Вложенные функции
@GameTimerCheck - отсчет времени до конца игры
@ContentChange - изменение контента в зависимости от нажатой вкладки в компоненте Header
@GameStart - функция начала игры
@timer - отсчет времени до конца игры
*/


const Game = ({ nowGame }) => {
    const[GameOn, setGameOn] = useState(false);
    //const[currentGame,setCurrentGame] = useState(choice_Game())
    function GameStart(){
        setGameOn(!GameOn);

    }

    //Таймер отсчета конца игры
    if(GameOn){
        setTimeout(()=> setGameOn(!GameOn),5000)
    }
    

    function choice_Game(){
        if (nowGame === 'Арифметика'){
            return <ExpCard/>
        }
        if (nowGame === 'Слова'){
            return <WordCard/>
        }
    }
    return(
        <div>
            {
                (GameOn)?
                    choice_Game():
                    <StartButton GameStart = {GameStart}/>
            }
        </div>
        
    )
};
Game.propTypes = {
    nowGame:PropTypes.func.isRequired
}

export default Game