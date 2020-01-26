import React from 'react'
import PropTypes from 'prop-types'


const LvlCard = ({ title, complexity, description }) =>
    <div className = "lvlcard">
        <p>
            Название уровня: { title }
        </p>
        <p>
            Описание:{ description }</p>
    </div>
 


LvlCard.propTypes = {
    title: PropTypes.string,
    description:PropTypes.string
}

export default LvlCard