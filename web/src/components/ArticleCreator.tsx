import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, TextField } from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid';

interface ArticleCreatorProps {
  onCreateArticle: (article: Article) => void;
  onUpdateArticle: (article: Article) => void;
  selectedArticle: Article | null;
}

const ArticleCreator = ({onCreateArticle, onUpdateArticle, selectedArticle}: ArticleCreatorProps) => {
  const [title, setTitle] = useState<string>(selectedArticle?.title || '')
  const [body, setBody] = useState<string>(selectedArticle?.body || '')
  const [articleId, setArticleId] = useState<string>(selectedArticle?.id || uuidv4())

  useEffect(() => {
    setTitle(selectedArticle?.title || '')
    setBody(selectedArticle?.body || '')
    setArticleId(selectedArticle?.id || uuidv4())
  }, [selectedArticle])

  const onSubmit = () => {
    const article = {
      id: articleId,
      title: title,
      body: body,
    }

    if (selectedArticle) {
      onUpdateArticle(article)
    } else {
      onCreateArticle(article)
    }

    setTitle('');
    setBody('');
    setArticleId(uuidv4());
  }

  return (
    <Grid container direction="column" spacing={2}>
      <Typography variant="h5" component="h2">{selectedArticle ? "Update Article" : "Add Article"}</Typography>
      <Grid item>
        <TextField
          fullWidth
          id="outlined-helperText"
          label="Title"
          defaultValue="Dog Fetches Bone"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          id="body"
          name="body"
          label="Body"
          placeholder="Local dog Sparky, recently fetched a large bone."
          multiline
          rows={6}
          variant="outlined"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button
          type="submit"
          onClick={() => onSubmit()}
          variant="contained"
          color="primary"
          disabled={title.length < 1 || body.length < 1}
        >
          {selectedArticle ? "Update Article" : "Add Article"}
        </Button>
      </Grid>
    </Grid>
  )
}

export default ArticleCreator
