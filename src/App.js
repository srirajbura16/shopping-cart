import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './components/App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import { ItemsProvider } from './components/ItemsContext';
import Nav from './components/Nav';
import Shop from './components/Shop';

function App() {
  return (
    <ItemsProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <Router> */}
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:id" component={ItemDetail} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        {/* </Router> */}
      </BrowserRouter>
    </ItemsProvider>
  );
}

export default App;
