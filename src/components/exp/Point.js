import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Point extends Component{
    render(){
        return(
            <div>
                <h3>Количество набранных очков: {this.props.point}</h3>
            </div>
        )
        
    }
}


Point.propTypes = {
    point:PropTypes.number.isRequired
}
export default Point