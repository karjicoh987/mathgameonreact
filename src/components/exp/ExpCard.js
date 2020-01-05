import React, {Component} from 'react';
import PanelInput from './PanelInput';
import Exp from './Exp';
import './expstyle.css'

class ExpCard extends Component{
    constructor(){
        super()
        /* 
        @exp состояние отвечающиее за отрисовку выражения
        @GameOn состояние отвечающиее за начало и конец игры
        */
        this.state = {
            exp:"",
            GameOn:true
        }
        //Привязка копки к объекту
        this.GenExp = this.GenExp.bind(this);
    }
    //Генерация выражения с рандомными числами
    GenExp(){
        this.setState({exp:Math.floor(Math.random() * Math.floor(100)) + " + " + Math.floor(Math.random() * Math.floor(100))})
    }
    render(){
        return(
            <div className = "Exp-card">
                <Exp GenExp = {this.state.exp}/>
                <PanelInput/>
                <button onClick = {this.GenExp}>✔</button>
            </div>  
        )
    }
}

export default ExpCard;