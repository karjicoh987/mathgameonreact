import React,{Component} from 'react';
import Header from './components/NavPanel/Header'
import ExpCard from './components/exp/ExpCard'
import "./App.css"

class App extends Component{
  constructor(){
    super()
    this.state = {
      GameOn:false
    }
    this.GameStart = this.GameStart.bind(this)
  }

  GameStart(){
    this.setState({GameOn:true})
  }
  render(){
    return(
      <div>
        <Header/>   
        {this.state.GameOn?
          <ExpCard />:
          <div className = "button-container">
           <input 
              className = "button-start" 
              type = "button" 
              value = "Начать" 
              onClick = {this.GameStart} />  
        </div>
        }
      </div>
    )
  }
}


export default App;
