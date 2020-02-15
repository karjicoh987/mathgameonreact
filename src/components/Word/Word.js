import React from 'react'
import PropTypes from 'prop-types'

function Word({ text }){
    return(
        <h1>{text}</h1>
    )
}

Word.propTypes = {
    text:PropTypes.string,
}

export default Word;