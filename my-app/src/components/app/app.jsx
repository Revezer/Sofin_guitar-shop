import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainComponent from '../main/main';
import BasketComponent from '../basket/basket';

const App = () => {
    return (
        <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainComponent />
        </Route>
        <Route exact path="/basket">
          <BasketComponent />
        </Route>
      </Switch>
    </BrowserRouter>
    );
};

export default App;
