import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

import Home from './Home'
import Game from './Game/Game.js'
import Scores from './Scores/Scores'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname}>
                <Tab label="Home" value="home" component={Link} to={'/'} />
                <Tab label="Game" value="game" component={Link} to={'/game'} />
                <Tab label="Score" value="score" component={Link} to={'/scores'}
                />
              </Tabs>
              <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/scores">
            <Scores />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;