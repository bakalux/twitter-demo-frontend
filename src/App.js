import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import ProfilePage from "./ProfilePage";

const Routing = () => {
  return (
    <div>
      <Redirect from="/" to="/EveryInteract" />
      <Route exact path="/EveryInteract" component={ProfilePage} />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    );
  }
}

export default App;
