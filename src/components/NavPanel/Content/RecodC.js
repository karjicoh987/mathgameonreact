import React,{Component} from 'react'
import PropsTypes from 'prop-types'

class RecordC extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.name}</p>
                <p>{this.props.record}</p>
            </div>
        )
    }
}