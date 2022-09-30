import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Tables from './components/Tables/Tables';
import Charts from './components/Charts/Charts';

function App() {
  return (
    <div className="App">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <Link className="navbar-item" to="/table">Table</Link>
        <Link className="navbar-item" to="/charts">Charts</Link>
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
