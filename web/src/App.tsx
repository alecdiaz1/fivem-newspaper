import React from 'react'
import Home from './pages/home/Home'
import CreateNewspaper from './pages/create-newspaper/CreateNewspaper'
import { FirebaseDatabaseProvider } from '@react-firebase/database'
import firebase from 'firebase/app'
import { config } from './firebase-credentials'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <div className="container">
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/create-newspaper">
              <CreateNewspaper />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </FirebaseDatabaseProvider>
  )
}

export default App

// style={ visibility ? { visibility: 'visible' } : { visibility: 'hidden' }}
