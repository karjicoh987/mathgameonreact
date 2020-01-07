import React,{Component} from 'react'


class Exp extends Component{    
    render(){
        return(
            <div className = "exp-text">
                {this.props.GenExp + " = ?"}
            </div>
        )
    }
}
export default Exp;