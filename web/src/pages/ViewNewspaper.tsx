import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { Link, useParams } from 'react-router-dom'
import { Divider, Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import firebase from 'firebase/app'
import 'firebase/database'
import ArticleList from '../components/ArticleList'

interface ViewNewspaperParams {
  id: string;
}

const ViewNewspaper = () => {
  const params = useParams<ViewNewspaperParams>();
  const database = firebase.database();
  const newspaperRef = database.ref(`newspapers/${params.id}`);
  const [articles, setArticles] = useState<Article[]>([]);
  const [newspaperDate, setNewspaperDate] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    newspaperRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setArticles(data.articles)
        setNewspaperDate((new Date(data.created).toLocaleDateString()))
      }
    })
  }, [])

  useEffect(() => {
    setSelectedArticle(articles[0])
  }, [articles])

  return (
    <Grid container spacing={4}>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Link to="/">
            <Button variant="contained" color="primary">
              Back
            </Button>
          </Link>
        </Grid>
        <Grid container item xs={8}>
          <Typography variant="h4" component="h1">Newspaper for {newspaperDate}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid style={{height: 600}} container item xs={12} spacing={4} alignItems="stretch">
          <Grid item xs={4} style={{maxHeight: '100%', overflow: 'auto'}}>
            <Typography variant="h5" component="h2">Articles</Typography>
            <ArticleList 
              articles={articles} 
              onClickArticle={(article) => setSelectedArticle(article)}
              selectedArticle={selectedArticle}
            />
          </Grid>
          <Grid container spacing={2} item xs={8} style={{maxHeight:' 100%'}}>
            <Grid item xs={12}>
              { selectedArticle && (
                <>
                  <Typography variant="h4" component="h2">{selectedArticle.title}</Typography>
                  <Typography variant="body1" component="p">{selectedArticle.body}</Typography>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  )
}

export default ViewNewspaper;