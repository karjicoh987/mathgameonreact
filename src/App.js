import React,{Component} from 'react';
import Header from './components/NavPanel/Header'
import Exp from './components/exp/Exp'
import PanelInput from './components/exp/PanelInput'


class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Exp/>
        <PanelInput/>
      </div>
    )
  }
}


export default App;
