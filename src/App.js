import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import ProfilePage from "./ProfilePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Redirect from="/" to="/EveryInteract" />
          <Route exact path="/EveryInteract" component={ProfilePage} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
