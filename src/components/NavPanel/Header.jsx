import React from 'react';
import NavText from './NavText';
import NavPanelData from '../Data/NalPanelData'
import Logo from './../../img/logo.png'
import {Link} from 'react-router-dom'

const Header = () => {
    const TextList = NavPanelData.map(
        (Data,i) => <Link className = "Link-Button"
                          to = {Data.path}>
                        <NavText 
                            key = { i } 
                            id = { i }
                            text = { Data.title }/>
                    </Link>

            
    );
    return(
            <div className = "Header">
                 <img
                    alt = "Здесь логотип"
                    src = { Logo }
                    height = "77"
                    width = "77"
                />
                <div className = "Nav-Link">
                    { TextList }
                </div>
            </div>
    )
};

export default Header;