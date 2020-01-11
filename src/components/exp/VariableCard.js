import React,{Component} from 'react'
import PropTypes from 'prop-types'
class VariableCard extends Component{
    render(){
        return(
            <button className = "ButtonVariable" onClick = {() => this.props.GameChanger(this.props.num)}>
                 {this.props.num}
            </button>
        )
    }
}

VariableCard.propTypes = {
    GameChanger:PropTypes.func.isRequired,
    num:PropTypes.number.isRequired
}

export default VariableCard