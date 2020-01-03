import React,{Component} from 'react'

class Exp extends Component{
    GenExp(){
        //Герерация случайных чисел длинной от 1 до 3
        return String(
            Math.floor(Math.random() * Math.floor(100)) + " + " + Math.floor(Math.random() * Math.floor(100))
        );
    }
    
    render(){
        return(
            <div>
                {this.GenExp()} = ?
            </div>
        )
    }
}
export default Exp;