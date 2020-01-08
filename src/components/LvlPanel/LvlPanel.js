import React,{Component} from 'react'
import LvlData from './LvlData'
import LvlCard from './LvlCard'

class LvlPanel extends Component{
    render(){
        const LvlCards = LvlData.map(
            (card,i) => <LvlCard key = {i} {...card}/>
        )
        return(
            <div>
                {LvlCards}
            </div>
            
        )
    }
}

export default LvlPanel