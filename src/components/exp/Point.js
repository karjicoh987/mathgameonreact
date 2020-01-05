import React,{Component} from 'react'


class Point extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.point}</h3>
            </div>
        )
        
    }
}

export default Point