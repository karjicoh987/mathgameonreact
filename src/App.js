import React,{ useState } from 'react';
import Header from './components/NavPanel/Header'
import Rule from './components/NavPanel/Rule/Rule'
import RecordC from './components/NavPanel/Record/Record'
import Game from './components/Game/Game'
import Home from './components/NavPanel/HomePage/HomePage'
import "./App.css"
import "./components/Game/Content.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom' ;
import ExpCard from './components/Game/exp/ExpCard';
import WordCard from './components/Game/Word/WordCard';

const App = () => {
    return(
      <div>
        <Router>
          <Header/>
          <Switch>
            <Route path = '/' exact component = {Home}/>
            <Route path = '/game' component = {Game}/>
            <Route path = '/game/exp' component = {ExpCard}/>
            <Route path = '/game/word' component = {WordCard}/>
            <Route path = '/rule' component = {Rule}/>
            <Route path = '/record' component = {RecordC}/>
          </Switch>
        </Router>
      </div>
    )
};


export default App;
