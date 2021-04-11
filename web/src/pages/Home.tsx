import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Divider, Typography, Grid, List, Button } from '@material-ui/core'
import NewspaperListItem from '../components/NewspaperListItem'
import firebase from 'firebase/app'
import 'firebase/database'

function App() {
  const [newspapers, setNewspapers] = useState<Newspaper[]>([]);
  const database = firebase.database();
  const newspapersRef = database.ref('newspapers');

  useEffect(() => {
    newspapersRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const fetchedNewspapers = snapshot.val();
        const newspapersToSet: Newspaper[] = [];
        for (let id in fetchedNewspapers) {
          newspapersToSet.push({ id, ...fetchedNewspapers[id] })
        }
        newspapersToSet.sort((a, b) => -a.created.localeCompare(b.created))
        setNewspapers(newspapersToSet)
      } else {
        setNewspapers([])
      }
    })  
  }, [])

  const onExit = () => {
    fetch("https://newspaper/exit", {
      method: 'POST',
      body: JSON.stringify({})
    });
  }

  return (
    <Grid container spacing={4}>
      <Grid container item alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h4" component="h1">Los Santos News</Typography>
        </Grid>
        <Grid container justify="flex-end" item xs={6}>
          <Grid container justify="flex-end" item xs={6} >
            <Link to="/create-newspaper">
              <Button variant="contained" color="primary">
                Create Newspaper
              </Button>
            </Link>
          </Grid>
          <Grid container justify="flex-end" item xs={6}>
            <Button variant="contained" color="primary" onClick={() => onExit()}>
              Exit
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid container item>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">Latest Newspapers</Typography>
        </Grid>
        <Grid item xs={12}>
          <List>
            {newspapers.length > 0 
              ? newspapers.map((newspaper: Newspaper) => (
                <NewspaperListItem newspaper={newspaper} />
              ))
              : <Typography variant="body1">No newspapers available</Typography>
            }
          </List>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
