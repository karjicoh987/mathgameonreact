import React,{ useState } from 'react';
import Header from './components/NavPanel/Header'
import Rule from './Rule/Rule'
import RecordC from './Record/Record'
import Game from './Pages/Game'
import "./App.css"
import "./Pages/Content.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom' ;

const App = () => {
    return(
        <Router>
          <Header/>
          <Switch>
            <Route path = '/' exact component = {Rule}/>
            <Route path = '/game' component = {Game}/>
            <Route path = '/rule' component = {Rule}/>
            <Route path = '/record' component = {RecordC}/>
          </Switch>
        </Router>

    )
};


export default App;
