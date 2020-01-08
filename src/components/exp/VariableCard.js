import React,{Component} from 'react'

class VariableCard extends Component{
    render(){
        return(
            <button className = "ButtonVariable" onClick = {() => this.props.GameChanger(this.props.id)}>
                 {this.props.num}
            </button>
        )
    }
}

export default VariableCard