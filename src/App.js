import React from 'react';
import Header from './components/NavPanel/Header'
import Rule from './components/Rule/Rule'
import RecordC from './components/Record/Record'
import Game from './components/Game/Game'
import Home from './components/HomePage/HomePage'
import "./App.css"
import "./components/Game/Content.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom' ;

const App = () => {
    return(
      <div>
        <Router>
          <Header/>
          <Switch>
            <Route path = '/' exact component = {Home}/>
            <Route path = '/game' component = {Game}/>
            <Route path = '/rule' component = {Rule}/>
            <Route path = '/record' component = {RecordC}/>
          </Switch>
        </Router>
      </div>

    )
};


export default App;
