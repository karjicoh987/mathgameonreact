import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Exp extends Component{    
    render(){
        return(
            <div className = "exp-text">
                {this.props.GenExp + " = ?"}
            </div>
        )
    }
}

Exp.propTypes = {GenExp:PropTypes.string}
export default Exp;