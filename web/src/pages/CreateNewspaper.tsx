import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import ArticleCreator from '../components/ArticleCreator'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ArticleList from '../components/ArticleList'
import firebase from 'firebase/app'
import 'firebase/database'

function CreateNewspaper() {
  const [articles, setArticles] = useState<Article[]>([])

  const addNewArticle = (newArticle) => {
    setArticles([...articles, newArticle])
  }

  const newspaperListRef = firebase.database().ref('newspapers');
  const newNewspaperRef = newspaperListRef.push();

  const addNewspaper = () => {
    console.log(articles, '--- articles before submit')
    const created = new Date().toISOString();

    newNewspaperRef.set({
      created: created,
      articles: articles
    })
  }

  return (
    <Grid container spacing={4}>
      <Grid container item xs={12}>
        <Grid item xs={3}>
          <Link to="/">
            <Button variant="contained" color="primary">
              Back
            </Button>
          </Link>
        </Grid>
        <Grid container item xs={6} justify="center">
          <Typography variant="h4" component="h1">Create a Newspaper</Typography>
        </Grid>
        <Grid item xs={3} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={() => addNewspaper()}>
          Add Newspaper
        </Button>
      </Grid>
      <Grid item xs={12}>
        <ArticleCreator
          onSubmit={(newArticle: Article) => addNewArticle(newArticle)}
        />
      </Grid>
      <Grid item xs={12}>
        <ArticleList articles={articles}/>
      </Grid>
    </Grid>
  )
}

export default CreateNewspaper
