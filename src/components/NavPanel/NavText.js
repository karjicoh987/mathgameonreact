import React,{Component} from 'react';
import PropTypes from 'prop-types'


class NavText extends Component{
    render(){
        return(
            <span   
                className = "text"
                onClick = {()=>this.props.contentChange(this.props.id)}>

                {this.props.text}
                
            </span>
        )
    }
} 
NavText.propTypes = {
    text: PropTypes.string,
    contentChange:PropTypes.func
}

export default NavText;