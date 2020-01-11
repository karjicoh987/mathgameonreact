import React,{Component} from 'react';
import PropTypes from 'prop-types'


class NavText extends Component{
    render(){
        return(
            <span className = "text">{this.props.text}</span>
        )
    }
} 
NavText.propTypes = {text: PropTypes.string}

export default NavText;