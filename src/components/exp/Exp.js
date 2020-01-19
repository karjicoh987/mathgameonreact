import React,{Component} from 'react'
import PropTypes from 'prop-types'


const Exp = ({ GenExp }) =>
    <div className = "exp-text">
        {GenExp + " = ?"}
    </div>

Exp.propTypes = {GenExp:PropTypes.string}
export default Exp;