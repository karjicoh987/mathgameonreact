import React from 'react'
import PropTypes from 'prop-types'

const Rule = ({ title, content }) =>
        <div className = "flexbox">
            <h1>{ title }</h1>
            <p>{ content }</p>
        </div>
        
Rule.propsTypes = {
    title:PropTypes.string,
    content:PropTypes.string
};

export default Rule