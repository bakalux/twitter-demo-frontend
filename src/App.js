import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ProfilePage from "./ProfilePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/EveryInteract" component={ProfilePage} />
          <Redirect from="/" to="/EveryInteract" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
