import React from 'react'
import PropsTypes from 'prop-types'

const StartButton = ({ GameStart })=>
    <div className = "button-container">
        <input
            className = "button-start"
            type = "button"
            value = "Начать"
            onClick = { GameStart } />
    </div>

StartButton.propTypes = {
    GameStart:PropsTypes.func.isRequired
};

export default StartButton