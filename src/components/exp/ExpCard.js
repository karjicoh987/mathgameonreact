import React, {Component} from 'react';
import Exp from './Exp';
import Point from './Point';
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
            value:"",
            userPoint:0
        }
        //Привязка копки к объекту
        this.GameChanger = this.GameChanger.bind(this);
        this.UserInput = this.UserInput.bind(this)
    }
    UserInput(e){
        this.setState({value: e.target.value});
    }
    GenExp(){
        return Math.floor(Math.random() * Math.floor(100)) + " + " + Math.floor(Math.random() * Math.floor(100))
    }
    GameChanger(){
        let response = eval(this.state.exp)
        if (this.state.value == response){
            this.setState(prevState =>{
               return {
                    exp:this.GenExp(),
                    value:"",
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
        return(
            <div className = "Exp-card">
                <Exp GenExp = {this.state.exp}/>
                <input 
                    type="text"
                    value={this.state.value} 
                    onChange={this.UserInput} 
                />
                <Point point = {this.state.userPoint}/>
                <button 
                    className = "ButtonGenExp"
                    onClick = {this.GameChanger}>✔</button>
            </div>  
        )
    }
}

export default ExpCard;