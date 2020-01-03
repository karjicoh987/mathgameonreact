import React, {Component} from 'react';
import NavText from './NavText'
import NavPanelData from '../Data/NalPanelData'
import './NavPanel.css'

class Header extends Component{
    render(){
        const TextList = NavPanelData.map(
            (text,i) => <NavText key = {i} text = {text} />
        )
        return(
            <div className = "Text-body">
                <div className = "text-content">
                    {TextList}
                </div>  
            </div>
        )
    }
}

export default Header;