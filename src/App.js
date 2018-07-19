import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import ProfilePage from './ProfilePage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/EveryInteract" />
      <Route path="/:username" component={ProfilePage} />
    </Switch>
  </BrowserRouter>
);

export default App;
