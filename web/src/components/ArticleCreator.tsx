import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Grid } from '@material-ui/core'

interface Article {
  title: string
  body: string
}

function ArticleCreator(props: { onSubmit: (article: Article) => void }) {
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')

  const onSubmit = () => {
    props.onSubmit({
      title: title,
      body: body,
    })
  }

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <TextField
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
          id="body"
          name="body"
          label="Body"
          placeholder="Local dog Sparky, recently fetched a large bone."
          multiline
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
        >
          Add Article
        </Button>
      </Grid>
    </Grid>
  )
}

export default ArticleCreator
