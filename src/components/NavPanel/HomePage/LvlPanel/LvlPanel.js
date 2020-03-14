import React,{useState} from 'react'
import LvlData from './LvlData'
import LvlCard from './LvlCard'
import Game from '../../../Game/Game'


const LvlPanel = () => {
    const[nowGame,setNowGame] = useState(null)
    const hundle = (title)=>{
        setNowGame(title)
    }
    const LvlCards = LvlData.map(
        (card,i) => <LvlCard
         key = {i} 
         changer = {hundle}
        {...card}/>
    )
    return(
        <div>
            {
              (!nowGame)?
                <div className ="Lvl-box">{LvlCards}
                </div>:<Game/>
            }
        </div>
            
        
    )
}

export default LvlPanel