import React from 'react'
import PropsTypes from 'prop-types'

const RecordC = ({ title, content }) =>
            <div className = "flexbox">
                <h1>{ title }</h1>
                <p>{ content }</p>
            </div>

RecordC.propTypes = {
    title:PropsTypes.string,
    content:PropsTypes.string
};

export default RecordC