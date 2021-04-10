import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

const ViewNewspaper = () => (
  <Grid container alignItems="center">
    <Grid item xs={2}>
      <Link to="/">
        <Button variant="contained" color="primary">
          Back
        </Button>
    </Link>
    </Grid>
    <Grid item xs={10}>
      <Typography variant="h3">Newspaper date</Typography>
    </Grid>
  </Grid>
)

export default ViewNewspaper;