import React from 'react'
import PropTypes from 'prop-types'
import './lvlstyle.css'

const LvlCard = ({ title, complexity, description }) =>
    <div className = "lvlcard">
        <p>
            Название уровня: { title }
        </p>
        <p>
            Сложность: { complexity }
        </p>
        <p>
            Описание:{ description }</p>
    </div>
 


LvlCard.propTypes = {
    title: PropTypes.string,
    complexity: PropTypes.number,
    description:PropTypes.string
}

export default LvlCard