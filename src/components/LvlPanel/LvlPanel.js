import React,{Component} from 'react'
import LvlData from './LvlData'
import LvlCard from './LvlCard'
import './lvlstyle.css'

class LvlPanel extends Component{
    render(){
        const LvlCards = LvlData.map(
            (card,i) => <LvlCard key = {i} {...card}/>
        )
        return(
            <div className = "Flex-box">
                {LvlCards}
            </div>
            
        )
    }
}

export default LvlPanel