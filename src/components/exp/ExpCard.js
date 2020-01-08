import React, {Component} from 'react';
import Exp from './Exp';
import Point from './Point';
import VariableCard from './VariableCard'
import './expstyle.css';

class ExpCard extends Component{
    constructor(){
        super()
        /* 
        @exp состояние отвечающиее за отрисовку выражения
        @response вычисленное выражение
        @value значение тектового поля
        @userPoint очки пользователя 
        */
        this.state = {
            exp:this.GenExp(),
            userPoint:0
        }
        //Привязка копки к объекту
        this.GameChanger = this.GameChanger.bind(this);
    }
    GenExp(){
        return Math.floor(Math.random() * Math.floor(100)) + " + " + Math.floor(Math.random() * Math.floor(100))
    }
    CalculateExp(){
        return (new Function('return ' + this.state.exp))()
    }
    
    GameChanger(num){
        let response = this.CalculateExp()
        if (num === response){
            this.setState(prevState =>{
               return {
                    exp:this.GenExp(),
                    userPoint:prevState.userPoint + 1
                    }
                }   
            )
            alert("Well done")
        }else{
            alert("You lose")
        }
    }
    render(){
        //TrueVariable  перменная необходимая для запоминания индекса правильного варианта
        const TrueVariable = Math.floor(Math.random() * Math.floor(3))
        
        // Генерирование массива с вариантами ответа
        const VarNumArr = new Array(3).fill(0).map( (n,i) =>{
            if (i === TrueVariable){
                return this.CalculateExp()
            }
            return (this.CalculateExp() + Math.floor(Math.random() * Math.floor(10)+1))
        })

        // Генерирование массива с компонентом VariableCard
        const VariableCards = VarNumArr.map((num,i) => <VariableCard 
                                                                    num = {num} 
                                                                    key = {i} 
                                                                    GameChanger = {this.GameChanger}
                                                         />)
        return(
            <div>
                <div className = "Exp-card">
                    <Exp GenExp = {this.state.exp}/>
                    <Point point = {this.state.userPoint}/>  
                </div>
                <div className = "flex-box">
                    {VariableCards}
                </div>
            </div>  
        )
    }
}

export default ExpCard;