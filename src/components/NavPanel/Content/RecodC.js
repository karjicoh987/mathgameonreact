import React,{Component} from 'react'
import PropsTypes from 'prop-types'

class RecordC extends Component{
    render(){
        return(
            <div className = "flexbox">
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

RecordC.propTypes = {
    title:PropsTypes.string,
    content:PropsTypes.string
}

export default RecordC