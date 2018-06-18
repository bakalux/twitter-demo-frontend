import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import UserPage from "./UserPage";

const Routing = () => {
  return (
    <div>
      <Redirect from="/" to="/EveryInteract" />
      <Route exact path="/EveryInteract" component={UserPage} />
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
