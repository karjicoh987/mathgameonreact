import React from 'react'
import LvlData from './LvlData'
import LvlCard from './LvlCard'


const LvlPanel = () => {
    const LvlCards = LvlData.map(
        (card,i) => <LvlCard key = {i} {...card}/>
    )
    return(
        <div className = "Lvl-box">
            {LvlCards}
        </div>
        
    )
}

export default LvlPanel