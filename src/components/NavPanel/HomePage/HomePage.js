import React from 'react';
import LvlPanel from './LvlPanel/LvlPanel'
import Search from './Search'

function Home(){
    return(
        <div className = "Home">
            <Search/>
            <LvlPanel/>
        </div>
        
    )
}

export default Home