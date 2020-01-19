import React from 'react';
import PropTypes from 'prop-types'


const NavText = ({ text, id, contentChange }) =>
            <span   
                className = "text"
                onClick = { ()=>contentChange(id) }>
                { text }
            </span>

NavText.propTypes = {
    text: PropTypes.string,
    contentChange:PropTypes.func
}

export default NavText;