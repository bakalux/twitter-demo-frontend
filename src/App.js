import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import ProfilePage from './ProfilePage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/EveryInteract" component={ProfilePage} />
      <Redirect from="/" to="/EveryInteract" />
    </Switch>
  </BrowserRouter>
);

export default App;
