import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AllCharacters from '../../containers/AllCharacters';
import DetailCharacter from '../../containers/DetailCharacter';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <AllCharacters {...routerProps} />}
            />
            <Route
              path="/:id"
              exact
              render={(routerProps) => <DetailCharacter {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
