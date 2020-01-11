import React, {Component} from 'react';
import NavText from './NavText'
import NavPanelData from '../Data/NalPanelData'
import Logo from './logo.png'
import './NavPanel.css'

class Header extends Component{
    render(){
        const TextList = NavPanelData.map(
            (Data,i) => <NavText key = {i} text = {Data.title} />
        )
        return(
            <div className = "Text-body">
                <div className = "text-content">
                    <img    alt = "Здесь логотип" 
                            src = {Logo} 
                            height = "64" 
                            width = "64"
                    />
                    {TextList}
                   
                </div>  
            </div>
        )
    }
}

export default Header;