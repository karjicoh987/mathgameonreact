import React, {useState} from 'react';
import AreaQuest from '../AreaQuest/AreaQuest';
import Point from '../Point/Point';
import VariableCard from '../VariableCard/VariableCard'
import BrainComplete from '../../img/brainComplete.png'
import BrainLose from '../../img/brainLose.png'
import './expstyle.css';

const ExpCard = () => {
    /* 
    Состояния
    @exp состояние отвечающиее за отрисовку выражения
    @userPoint очки пользователя 
    */
    const[exp, setExp] = useState(GenExp());
    const[userPoint, setUserPoint] = useState(0);
    const[Brains] = useState(Array());
    
    function GenExp(){
        const signs = [
            "+",
            "-",
            "*"
        ];
        const sign = signs[Math.floor(Math.random() * signs.length)];
        return Math.floor(Math.random() * Math.floor(100)) + ' ' + sign + ' ' + Math.floor(Math.random() * Math.floor(100));
    }
       
    function CalculateExp(){
        return new Function('return ' + exp)();
    }
    function GameChanger(num){
        let response = CalculateExp()
        if (num == response){
            setExp(GenExp());
            setUserPoint(userPoint + 1);
            Brains.push(true)
        }else{
            setExp(GenExp());
            Brains.push(false)
        }
    }
        //TrueVariable  перменная необходимая для запоминания индекса правильного варианта
        const TrueVariable = Math.floor(Math.random() * Math.floor(3))
        // Генерирование массива с вариантами ответа
        const VarNumArr = new Array(3).fill(0).map( (n,i) =>{
            if (i === TrueVariable){
                return CalculateExp()
            }
            return (CalculateExp() + Math.floor(Math.random() * Math.floor(10) + 1))
        })

        // Генерирование массива с компонентом VariableCard
        const VariableCards = VarNumArr.map((num,i) => <VariableCard 
                                                                    text = {num} 
                                                                    key = {i} 
                                                                    GameChanger = {GameChanger}
                                                         />)
        
        let BrainsImg = Brains.map((stateBrain,i)=>{
            if(stateBrain){
                return <img src = {BrainComplete} key = {i} width = "80" height = "80" alt = "Зеленый мозг"/>
            }else{
                return <img src = {BrainLose} key = {i} width = "80" height = "80" alt = "Красный мозг"/>
            }
        }
        )
        return(
            <div>
                <div className = "Exp-card">
                    <AreaQuest QuestText = {exp}/>
                    <Point point = {userPoint}/>
                </div>
                <div className = "flex-box">
                    {VariableCards}
                </div>
                <div className = "flex-box">
                    {BrainsImg}
                </div>
            </div>  
        )
}


export default ExpCard;