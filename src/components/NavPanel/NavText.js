import React from 'react';
import PropTypes from 'prop-types'


const NavText = ({ text }) =>
            <span   
                className = "text">
                { text }
            </span>

NavText.propTypes = {
    text: PropTypes.string,
};

export default NavText;