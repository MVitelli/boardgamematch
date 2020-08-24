import './App.css';
import Main from './Main';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameDescription from './GameDescription';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/games/:gameId" component={GameDescription}/>
          <Route path="/">
            <Home />
          </Route> 
        </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Main></Main>
      </header>
    </div>
  )
}
    
export default App;
