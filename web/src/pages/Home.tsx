import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import NewspaperListItem from '../components/NewspaperListItem'
import firebase from 'firebase/app'
import 'firebase/database'

// show and hide
import { useVisibility } from '../core/hooks/useVisibility'
import { useCoreService } from '../core/hooks/useCoreService'
import { Typography } from '@material-ui/core'

function App() {
  useCoreService()

  const [newspapers, setNewspapers] = useState<Newspaper[]>([]);

  const visibility = useVisibility()
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
  
  return (
    <Grid container spacing={4}>
      <Grid container item alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h4" component="h1">Los Santos News</Typography>
          <Typography variant="subtitle2">Visibility - {visibility.toString()}</Typography>
        </Grid>
        <Grid container justify="flex-end" item xs={6}>
          <Link to="/create-newspaper">
            <Button variant="contained" color="primary">
              Create Newspaper
            </Button>
          </Link>
        </Grid>
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
