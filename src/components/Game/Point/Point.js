import React from 'react'
import PropTypes from 'prop-types'

const Point = ({ point }) =>
    <h3>{point} X</h3>

Point.propTypes = {
    point:PropTypes.number
}
export default Point