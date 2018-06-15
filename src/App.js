import React, {Component} from "react";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";

import Everyinteract from './Everyinteract'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/everyinteract'/>}/>
          <Route exact path='/everyinteract' component={Everyinteract}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
