import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Tables from './components/Tables/Tables';
import Charts from './components/Charts/Charts';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table" component={Tables}>
        </Route>
        <Route path="/charts" component={Charts}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
