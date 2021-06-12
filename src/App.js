import './components/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/:id" component={ItemDetail} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
