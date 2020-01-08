import React,{Component} from 'react'

class LvlCard extends Component{
    render(){
        return(
            <div>
                <div>
                    <p>
                        Название уровня: {this.props.title}
                    </p>
                    <p>
                       Сложность: {this.props.complexity}
                    </p>
                    <p>
                        Описание:{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default LvlCard