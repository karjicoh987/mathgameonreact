import React, {useState} from 'react';
import AreaQuest from '../AreaQuest/AreaQuest';
import Point from '../Point/Point';
import VariableCard from '../VariableCard/VariableCard'
import BrainComplete from '../../../img/brainComplete.png'
import BrainLose from '../../../img/brainLose.png'
import VarArr from '../GameMethod'
import {GenExp, FalseCalculateExp} from './ExpMethod'
import './expstyle.css';

const ExpCard = () => {
    /* 
    Состояния
    @ exp состояние отвечающиее за отрисовку выражения
    @ userPoint очки пользователя за правильный ответ
    @ falsePoint не правильный ответ
    */
    const[exp, setExp] = useState(GenExp());
    const[userPoint, setUserPoint] = useState(0);
    const[falsePoint, setfalsePoint] = useState(0)
    
    function GameChanger(value){
        let response = eval(exp)
        if (value === response){
            setExp(GenExp());
            setUserPoint(userPoint + 1);
        }else{
            setExp(GenExp());
            setfalsePoint(falsePoint + 1);
        }
    }

        const VarNumArr = VarArr(FalseCalculateExp,exp,"Exp")
        // Генерирование массива с компонентом VariableCard
        const VariableCards = VarNumArr.map((num,i) => <VariableCard 
                                                                    text = {num} 
                                                                    key = {i} 
                                                                    GameChanger = {GameChanger}
                                                         />)
        
        
        return(
            <div>
                <div className = "Exp-card">
                    <AreaQuest QuestText = {exp}/>
                </div>
                <div className = "flex-box">
                    {VariableCards}
                </div>
                <div className = "flex-box">
                <img src = {BrainComplete} width = "80" height = "80" alt = "Зеленый мозг"/>
                    <Point point = {userPoint}/>
                <img src = {BrainLose} width = "80" height = "80" alt = "Красный мозг"/>
                    <Point point = {falsePoint}/>
                </div>
            </div>  
        )
}


export default ExpCard;