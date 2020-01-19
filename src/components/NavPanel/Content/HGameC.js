import React from 'react'
import PropTypes from 'prop-types'

const HowGameCont = ({ title, content }) =>
        <div className = "flexbox">
            <h1>{ title }</h1>
            <p>{ content }</p>
        </div>
        
HowGameCont.propsTypes = {
    title:PropTypes.string,
    content:PropTypes.string
}

export default HowGameCont