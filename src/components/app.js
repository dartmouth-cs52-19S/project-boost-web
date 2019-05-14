import '../styles.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import React from 'react';
import LandingPage from './landing-page/landing-page';
import Nav from './navbar';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/home" component={LandingPage} />
            <Route render={() => (<div>post not found </div>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}
