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
    @exp состояние отвечающиее за отрисовку выражения
    @userPoint очки пользователя 
    */
    const[exp, setExp] = useState(GenExp());
    const[userPoint, setUserPoint] = useState(0);
    const[Brains] = useState(new Array());
    
    function GameChanger(value){
        let response = eval(exp)
        if (value === response){
            setExp(GenExp());
            setUserPoint(userPoint + 1);
            Brains.push(true)
        }else{
            setExp(GenExp());
            Brains.push(false)
        }
    }

        const VarNumArr = VarArr(FalseCalculateExp,exp)
        // Генерирование массива с компонентом VariableCard
        const VariableCards = VarNumArr.map((num,i) => <VariableCard 
                                                                    text = {num} 
                                                                    key = {i} 
                                                                    GameChanger = {GameChanger}
                                                         />)
        
        let BrainsImg = Brains.map((stateBrain,i)=>{
            if(stateBrain){
                return <img src = {BrainComplete} key = {i} width = "80" height = "80" alt = "Зеленый мозг"/>
            }
            return <img src = {BrainLose} key = {i} width = "80" height = "80" alt = "Красный мозг"/>
        }
        )
        return(
            <div>
                <div className = "Exp-card">
                    <AreaQuest QuestText = {exp}/>
                </div>
                <div className = "flex-box">
                    {VariableCards}
                </div>
                <div className = "flex-box">
                    <Point point = {userPoint}/>
                    {BrainsImg}
                </div>
            </div>  
        )
}


export default ExpCard;