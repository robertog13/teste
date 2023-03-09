import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/about" component={ About }/>
      </Switch>
    </div>
  );
}

export default App;
