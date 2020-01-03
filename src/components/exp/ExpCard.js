import React, {Component} from 'react';
import PanelInput from './PanelInput';
import Exp from './Exp';
import './expstyle.css'

class ExpCard extends Component{
    render(){
        return(
            <div className = "Exp-card">
                <Exp />
                <PanelInput />
            </div>  
        )
    }
}

export default ExpCard;