import React,{Component} from 'react';
import Header from './components/NavPanel/Header'
import ExpCard from './components/exp/ExpCard'


class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <ExpCard />
      </div>
    )
  }
}


export default App;
