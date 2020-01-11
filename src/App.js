import React,{Component} from 'react';
import Header from './components/NavPanel/Header'
import HowGameCont from './components/NavPanel/Content/HGameC'
import RecordCont from './components/NavPanel/Content/RecodC'
import NavPanelData from './components/Data/NalPanelData'
import ExpCard from './components/exp/ExpCard'
import LvlPanel from './components/LvlPanel/LvlPanel'
import GameCont from './components/NavPanel/Content/GameC'
import "./App.css"
import "./components/NavPanel/Content/Content.css"

class App extends Component{
  constructor(){
    super()
    this.state = {
      GameOn:false,
      timer:false,
      GameCont:false,
      GameHow:false,
      GameRecord:false
    }
    this.GameStart = this.GameStart.bind(this)
    this.contentChange = this.contentChange.bind(this)
  }
  GameTimerCheck(){
    setTimeout(() => {
        this.setState(prevState =>{
            return{timer: !prevState.timer,
                   GameOn: !prevState.GameOn}
            })
        }, 60000)
  }
  //Оптимизировать
  contentChange(id){
    this.setState(
      {
        GameCont:false,
        GameHow:false,
        GameRecord:false
      }
    )
    if (id === 0){
      this.setState(
        prevState =>{
          return{
            GameHow:!prevState.GameHow}
        }
      )
    }else if (id === 1){
      this.setState(
        prevState =>{
          return{GameCont:!prevState.GameCont}
        }
      )
    }else{
      this.setState(
        prevState =>{
          return{GameRecord:!prevState.GameRecord}
        }
      )
    }
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
        <Header contentChange = {this.contentChange}/>   
        {
          (this.state.GameHow)?
          <HowGameCont {...NavPanelData[0]}/>:
          (this.state.GameCont)?
              this.state.GameOn && this.state.timer?
              <ExpCard />:
              <GameCont GameStart = {this.GameStart}/>:
          (this.state.GameRecord)?
          <RecordCont {...NavPanelData[2]}/>:
          <LvlPanel/>
        }
      </div>
    )
  }
}


export default App;
