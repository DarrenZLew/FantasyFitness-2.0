import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/Pages";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route path="/" exact render={props => <Login />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
