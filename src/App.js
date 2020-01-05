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
        <button className ="button-start" onClick = {this.GameStart}>Начать</button>
        {this.state.GameOn?
          <ExpCard />:null
        }
      </div>
    )
  }
}


export default App;
