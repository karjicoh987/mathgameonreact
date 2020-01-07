import React,{Component} from 'react'


class Point extends Component{
    render(){
        return(
            <div>
                <h3>Количество набранных очков: {this.props.point}</h3>
            </div>
        )
        
    }
}

export default Point