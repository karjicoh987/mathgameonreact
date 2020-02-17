import React from 'react'
import PropTypes from 'prop-types'

const VariableCard = ({ text, GameChanger }) =>
    <button className = "ButtonVariable" onClick = {() => GameChanger(text)}>
        {text}
    </button>

VariableCard.propTypes = {
    GameChanger:PropTypes.func.isRequired,
    text:PropTypes.string.isRequired
}

export default VariableCard