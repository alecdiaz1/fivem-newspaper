import React from 'react'
import Home from './pages/Home'
import CreateNewspaper from './pages/CreateNewspaper'
import { FirebaseDatabaseProvider } from '@react-firebase/database'
import firebase from 'firebase/app'
import { config } from './firebase-credentials'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import ViewNewspaper from './pages/ViewNewspaper'
import { Container } from '@material-ui/core'
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  margin-top: 24px;
`

function App() {
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <StyledContainer maxWidth="md">
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/create-newspaper">
              <CreateNewspaper />
            </Route>
            <Route path="/view-newspaper">
              <ViewNewspaper />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </StyledContainer>
    </FirebaseDatabaseProvider>
  )
}

export default App