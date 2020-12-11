import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage } from '../pages'

const MyRouter = () => (
  <Router>
    <Switch>
      <Route path="/signin" component={LoginPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>
)

export { MyRouter }
