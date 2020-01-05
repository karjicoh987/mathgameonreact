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
            response:0,
        }
        //Привязка копки к объекту
        this.GenExp = this.GenExp.bind(this);
    }
    //Генерация выражения с рандомными числами
    GenExp(){
        this.setState({exp:Math.floor(Math.random() * Math.floor(100)) + " + " + Math.floor(Math.random() * Math.floor(100))})
    }

    Culc_exp(){
        this.setState({response:eval(this.state.exp)})
    }

    GameChanger(){
        
    }
    render(){
        return(
            <div className = "Exp-card">
                <Exp GenExp = {this.state.exp}/>
                <PanelInput/>
                <button className = "ButtonGenExp" onClick = {this.GenExp}>✔</button>
            </div>  
        )
    }
}

export default ExpCard;