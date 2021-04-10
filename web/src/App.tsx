import React, { useRef, useState, useEffect } from 'react'
import Home from './pages/Home'
import CreateNewspaper from './pages/CreateNewspaper'
import firebase from 'firebase/app'
import { config } from './firebase-credentials'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import ViewNewspaper from './pages/ViewNewspaper'
import { Container } from '@material-ui/core'
import styled from 'styled-components';

firebase.initializeApp(config);

const StyledContainer = styled(Container)`
  margin-top: 24px;
`

function App() {
  const [visible, _setVisible] = React.useState('');
  const visibleRef = React.useRef(visible);

  const setVisible = data => {
    visibleRef.current = data;
    _setVisible(data)
  }

  window.addEventListener('message', function(event) {
    const item = event.data;
    if (item.type === "ui") {
      if (item.status === true) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
  })  

  if (visible) {
    return (
      <StyledContainer 
        maxWidth="md" 
        style={{visibility: `${visible ? 'visible' : 'hidden'}`}}
      >
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/create-newspaper">
              <CreateNewspaper />
            </Route>
            <Route path="/view-newspaper/:id">
              <ViewNewspaper />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </StyledContainer>
    )
  }

  return (<></>)
}

export default App