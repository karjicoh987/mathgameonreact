import React from 'react'
import PropTypes from 'prop-types'

const Point = ({ point }) =>
    <h3>{ point }</h3>

Point.propTypes = {
    point:PropTypes.number.isRequired
}
export default Point