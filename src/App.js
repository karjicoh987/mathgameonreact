import React,{Component} from 'react';
import Header from './components/NavPanel/Header'
import ExpCard from './components/exp/ExpCard'
import LvlPanel from './components/LvlPanel/LvlPanel'
import GameCont from './components/NavPanel/Content/GameC'
import "./App.css"

class App extends Component{
  constructor(){
    super()
    this.state = {
      GameOn:false,
      timer:false
    }
    this.GameStart = this.GameStart.bind(this)
  }
  GameTimerCheck(){
    setTimeout(() => {
        this.setState(prevState =>{
            return{timer: !prevState.timer,
                   GameOn: !prevState.GameOn}
            })
        }, 60000)
  }
  NavChange(id){
    
  }
  GameStart(){
    this.setState(prevState => {
      return {GameOn:!prevState.GameOn,
              timer:!prevState.timer}
    })
    this.GameTimerCheck()
  }

  render(){
    return(
      //следующие строки должны быть перписаны под ебанный роутинг реакт, ибо это ппц
      <div>
        <Header/>   
        {
        
        
        this.state.GameOn && this.state.timer?
          <ExpCard />:
          <GameCont GameStart = {this.GameStart}/>
        }
        <LvlPanel/>
      </div>
    )
  }
}


export default App;
