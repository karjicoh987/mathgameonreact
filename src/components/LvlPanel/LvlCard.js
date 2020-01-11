import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './lvlstyle.css'
class LvlCard extends Component{
    render(){
        return(
                <div className = "lvlcard">
                    <p>
                        Название уровня: {this.props.title}
                    </p>
                    <p>
                       Сложность: {this.props.complexity}
                    </p>
                    <p>
                        Описание:{this.props.description}</p>
                </div>
        )
    }
}


LvlCard.propTypes = {
    title: PropTypes.string,
    complexity: PropTypes.number,
    description:PropTypes.string
}

export default LvlCard