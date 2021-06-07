import './components/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
// Route renders the component based on the URL.
// Switch renders the first child Route that matches the URL.

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
