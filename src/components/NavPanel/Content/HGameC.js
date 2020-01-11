import React,{Component} from 'react'
import PropTypes from 'prop-types'


class HowGameCont extends Component{
    render(){
        return(
        <div className = "flexbox">
            <h1>{this.props.title}</h1>
            <p>{this.props.content}</p>
        </div>
        )
    }  
} 
HowGameCont.propsTypes = {
    title:PropTypes.string,
    content:PropTypes.string
}

export default HowGameCont