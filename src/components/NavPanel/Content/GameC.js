import React from 'react'
import PropsTypes from 'prop-types'

const GameCont = ({ GameStart }) => 
    <div className = "button-container">
        <input 
            className = "button-start" 
            type = "button" 
            value = "Начать" 
            onClick = { GameStart } />  
    </div>

GameCont.propTypes = {
    GameStart:PropsTypes.func.isRequired
}

export default GameCont