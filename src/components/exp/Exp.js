import React,{Component} from 'react'


class Exp extends Component{
    //Генерация выражения с рандомными числами
    GenExp(){
        return String(
            Math.floor(Math.random() * Math.floor(100)) + " + " + Math.floor(Math.random() * Math.floor(100))
        );
    }
    
    render(){
        return(
            <div className = "exp-text">
                {this.GenExp()} = ?
            </div>
        )
    }
}
export default Exp;