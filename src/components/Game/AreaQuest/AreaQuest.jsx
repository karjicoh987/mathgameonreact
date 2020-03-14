import React from 'react'
import PropTypes from 'prop-types'


const AreaQuest = ({ QuestText }) =>
    <div className = "exp-text">
        {QuestText}
    </div>

AreaQuest.propTypes = {QuestText:PropTypes.string}
export default AreaQuest;