import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
        <Header onShowCart={showCartHandler} />
        {cartIsShown && <Cart onClose={hideCartHandler} />}
       <Switch>
    <Route path='/' exact>
        <main>
          <Meals />
        </main>
    </Route>
    <Route path='/products'>
      <main>
        <Meals />
      </main>
    </Route>
    <Route path='/orders'>
      
    </Route>
    <Route path='/cart'>
      
    </Route>
    <Route path='*'>
      {/* <NotFound /> */}
    </Route>
  </Switch>
    </div>
  );
}

export default App;
