import React,{Component} from 'react'
import PropsTypes from 'prop-types'

class GameCont extends Component{
    render(){
        return(
            <div className = "button-container">
                <input 
                className = "button-start" 
                type = "button" 
                value = "Начать" 
                onClick = {this.props.GameStart} />  
            </div>
        )
    }
}

GameCont.propTypes = {
    GameStart:PropsTypes.func.isRequired
}
export default GameCont