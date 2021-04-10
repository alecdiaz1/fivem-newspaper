import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import ArticleCreator from '../components/ArticleCreator/ArticleCreator'
import styled from 'styled-components'
import { Divider, Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Article = styled.div`
  padding: 10px;
  border: 2px solid black;
`

interface Article {
  title: string
  body: string
}

function CreateNewspaper() {
  const [articles, setArticles] = useState<Article[]>([])

  const addNewArticle = (newArticle) => {
    console.log(newArticle)
    setArticles([...articles, newArticle])
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
        <ArticleCreator
          onSubmit={(newArticle: Article) => addNewArticle(newArticle)}
        />
      </Grid>
      <Grid item xs={12}>
        <List>
          {articles.map((article) => (
            <>
              <ListItem>
                <ListItemText 
                  primary={`Title: ${article.title}`} 
                  secondary={`${article.body}`}
                />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Grid>
    </Grid>
  )
}

export default CreateNewspaper
