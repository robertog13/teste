import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home }/>
        {/* <Route exact path="/about" component={ About }/> */}
      </Switch>
    </div>
  );
}

export default App;
