import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Grid, Typography } from '@material-ui/core'

interface Article {
  title: string
  body: string
}

function ArticleCreator(props: { onSubmit: (article: Article) => void }) {
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')

  const onSubmit = () => {
    setTitle('');
    setBody('');

    props.onSubmit({
      title: title,
      body: body,
    })
  }

  return (
    <Grid container direction="column" spacing={2}>
      <Typography variant="h5" component="h2">Create Article</Typography>
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
          Add Article
        </Button>
      </Grid>
    </Grid>
  )
}

export default ArticleCreator
