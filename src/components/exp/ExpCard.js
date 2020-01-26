import React, {useState} from 'react';
import Exp from './Exp';
import Point from './Point';
import VariableCard from './VariableCard'
import BrainComplete from './brainComplete.png'
import BrainLose from './brainLose.png'
import './expstyle.css';

const ExpCard = () => {
    /* 
    Состояния
    @exp состояние отвечающиее за отрисовку выражения
    @userPoint очки пользователя 
    */
    const[exp, setExp] = useState(GenExp());
    const[userPoint, setUserPoint] = useState(0);
    const[Brains] = useState(Array())
    function GenExp(){
        const signs = [
            "*",
            "-",
            "+",
        ]
        const sign = signs[Math.floor(Math.random() * signs.length)]
        return Math.floor(Math.random() * Math.floor(100)) + " " + sign + " " + Math.floor(Math.random() * Math.floor(100));
    }
       
    //Расчет выражения
    function CalculateExp(){

        return new Function('return ' + exp)();
    }

    //Проверка правильности выражения
    function GameChanger(num){
        let response = CalculateExp()
        if (num === response){
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
                                                                    num = {num} 
                                                                    key = {i} 
                                                                    GameChanger = {GameChanger}
                                                         />);
        
        //Генерация массива с изображениями правильных и не правильных ответов
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
                    <Exp GenExp = {exp}/>
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