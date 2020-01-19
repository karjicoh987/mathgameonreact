import React from 'react'
import PropTypes from 'prop-types'

const VariableCard = ({ num, GameChanger }) =>
    <button className = "ButtonVariable" onClick = {() => GameChanger(num)}>
        {num}
    </button>

VariableCard.propTypes = {
    GameChanger:PropTypes.func.isRequired,
    num:PropTypes.number.isRequired
}

export default VariableCard