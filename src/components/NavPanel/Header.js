import React from 'react';
import NavText from './NavText';
import NavPanelData from '../Data/NalPanelData'
import Logo from './logo.png'
import {Link} from 'react-router-dom'
import './NavPanel.css'

const Header = () => {
    const TextList = NavPanelData.map(
        (Data,i) => <Link to = {Data.path}>
                        <NavText 
                            key = { i } 
                            id = { i }
                            text = { Data.title }/>
                    </Link>

            
    );
    return(
            <div className = "Text-body">
                <div className = "text-content">
                 <img
                    alt = "Здесь логотип"
                    src = { Logo }
                    height = "64"
                    width = "64"
                    />
                    { TextList }

                </div>
            </div>
    )
};

export default Header;