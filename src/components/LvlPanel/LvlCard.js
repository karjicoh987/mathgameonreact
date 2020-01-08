import React,{Component} from 'react'
import './lvlstyle.css'
class LvlCard extends Component{
    render(){
        return(
                <div className = "lvlcard">
                    <p>
                        Название уровня: {this.props.title}
                    </p>
                    <p>
                       Сложность: {this.props.complexity}
                    </p>
                    <p>
                        Описание:{this.props.description}</p>
                </div>
        )
    }
}

export default LvlCard