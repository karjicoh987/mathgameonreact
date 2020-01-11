import React, {Component} from 'react';
import PropTypes from 'prop-types'
import NavText from './NavText'
import NavPanelData from '../Data/NalPanelData'
import Logo from './logo.png'
import './NavPanel.css'

class Header extends Component{
    render(){
        const TextList = NavPanelData.map(
            (Data,i) => <NavText 
                                key = {i} 
                                id = {i}
                                text = {Data.title}
                                contentChange = {this.props.contentChange}/>
        )
        return(
            <div className = "Text-body">
                <div className = "text-content">
                 <img   
                    alt = "Здесь логотип" 
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
Header.propTypes = {
    contentChange:PropTypes.func.isRequired
}
export default Header;