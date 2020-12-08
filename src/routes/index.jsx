import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage } from '../pages/home'

const MyRouter = () => (
  <Router>
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
)

export { MyRouter }
