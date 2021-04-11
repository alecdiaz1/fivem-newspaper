import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArticleCreator from '../components/ArticleCreator'
import { Divider, Grid, Button, Typography, Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import ArticleList from '../components/ArticleList'
import firebase from 'firebase/app'
import 'firebase/database'

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function CreateNewspaper() {
  const [articles, setArticles] = useState<Article[]>([])
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [successAlertVisible, setSuccessAlertVisible] = useState(false);

  const addNewArticle = (newArticle: Article) => {
    setArticles([...articles, newArticle]);
  }

  const onClickArticle = (clickedArticle: Article) => {
    const articleIndex: number = articles.findIndex((article => article.id === clickedArticle.id));
    const selectedArticleIndex: number = articles.findIndex((article => article.id === selectedArticle?.id));

    if (articleIndex === selectedArticleIndex) {
      setSelectedArticle(null);
    } else {
      setSelectedArticle(clickedArticle);
    }
  }

  const updateArticle = (updatedArticle: Article) => {
    const articleIndex: number = articles.findIndex((article => article.id === updatedArticle.id));
    const updatedArticles = [...articles];
    updatedArticles[articleIndex] = updatedArticle;
    setArticles(updatedArticles);
    setSelectedArticle(null);
  }

  const deleteArticle = (articleToDelete: Article) => {
    const updatedArticles = [...articles].filter(article => article.id !== articleToDelete.id);
    setArticles(updatedArticles);
    setSelectedArticle(null);
  }

  const newspaperListRef = firebase.database().ref('newspapers');
  const newNewspaperRef = newspaperListRef.push();

  const addNewspaper = () => {
    const created = new Date().toISOString();
    newNewspaperRef.set({
      created: created,
      articles: articles
    })

    setArticles([]);
    setSelectedArticle(null);
    setSuccessAlertVisible(true)  
  }

  return (
    <Grid container spacing={4}>
      <Snackbar 
        open={successAlertVisible} 
        autoHideDuration={6000} 
        onClose={() => setSuccessAlertVisible(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setSuccessAlertVisible(false)} severity="success">
          Newspaper created!
        </Alert>
      </Snackbar>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Link to="/">
            <Button variant="contained" color="primary">
              Back
            </Button>
          </Link>
        </Grid>
        <Grid container item xs={8}>
          <Typography variant="h4" component="h1">Create a Newspaper</Typography>
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
            onClickArticle={(article) => onClickArticle(article)}
            onDeleteArticle={(article) => deleteArticle(article)}
            selectedArticle={selectedArticle}
          />
          { selectedArticle &&
            <Button onClick={() => setSelectedArticle(null)}>New Article</Button>
          }
        </Grid>
        <Grid container spacing={2} item xs={8} style={{maxHeight:' 100%'}}>
          <Grid item xs={12}>
            <ArticleCreator
              selectedArticle={selectedArticle}
              onCreateArticle={(newArticle: Article) => addNewArticle(newArticle)}
              onUpdateArticle={(updatedArticle: Article) => updateArticle(updatedArticle)}
            />
          </Grid>
          <Grid container justify="flex-end" item xs={12} direction="column">
            <Button disabled={articles.length < 1} variant="contained" color="primary" onClick={() => addNewspaper()}>
              Add Newspaper
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CreateNewspaper
