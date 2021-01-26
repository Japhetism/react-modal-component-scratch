import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import HomeScreen from '../src/screens/home'
import ErrorScreeen from '../src/screens/error'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact component={ErrorScreeen} />
      </Switch>
    </Router>
  );
}

export default App;
