import React,{Component} from 'react';

class NavText extends Component{
    render(){
        return(
            <span className = "text">{this.props.text}</span>
        )
    }
} 


export default NavText;