import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';

import JsonTutorial from './jsonTutorial';

const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={JsonTutorial} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
