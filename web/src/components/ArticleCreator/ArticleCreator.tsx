import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

interface Article {
  title: string
  body: string
}

function ArticleCreator(props: { onSubmit: (article: Article) => void }) {
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')

  const onSubmit = () => {
    console.log('submit')
    props.onSubmit({
      title: title,
      body: body,
    })
  }

  return (
    <FormContainer>
      <TextField
        id="outlined-helperText"
        label="Title"
        defaultValue="Dog Fetches Bone"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
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
      <Button
        type="submit"
        onClick={() => onSubmit()}
        variant="contained"
        color="primary"
      >
        Add Article
      </Button>
    </FormContainer>
  )
}

export default ArticleCreator
