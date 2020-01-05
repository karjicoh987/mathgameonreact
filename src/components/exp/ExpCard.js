import React, {Component} from 'react';
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
            value:""
        }
        //Привязка копки к объекту
        this.GameChanger = this.GameChanger.bind(this);
        this.UserInput = this.UserInput.bind(this)
    }
    UserInput(e){
        this.setState({value: e.target.value});
    }
    GameChanger(){
        this.setState({value:"",
                       exp:Math.floor(Math.random() * Math.floor(100)) + " + " + Math.floor(Math.random() * Math.floor(100)),
                       response:eval(this.exp)})
        if (this.state.value === this.state.response){
            alert("Well done")
        }else{
            alert("You lose")
        }
    }
    render(){
        return(
            <div className = "Exp-card">
                <Exp GenExp = {this.state.exp}/>
                <input type="text" value={this.state.value} onChange={this.UserInput} />
                <button className = "ButtonGenExp" onClick = {this.GameChanger}>✔</button>
            </div>  
        )
    }
}

export default ExpCard;