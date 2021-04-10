import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import NewspaperListItem from '../components/NewspaperListItem'

// show and hide
import { useVisibility } from '../core/hooks/useVisibility'
import { useCoreService } from '../core/hooks/useCoreService'
import { Typography } from '@material-ui/core'
import { SAMPLE_NEWSPAPERS } from './../TEST_NEWSPAPERS';

function App() {
  useCoreService()
  const visibility = useVisibility()
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
            {SAMPLE_NEWSPAPERS.map((newspaper) => (
              <NewspaperListItem newspaper={newspaper} />
            ))}
          </List>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
