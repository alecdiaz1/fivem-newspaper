import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ArticleListItem from '../components/ArticleListItem'

// show and hide
import { useVisibility } from '../core/hooks/useVisibility'
import { useCoreService } from '../core/hooks/useCoreService'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
`

const NewspaperList = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    border: 1px solid lightgray;
    padding: 20px;
  }
`

const SAMPLE_NEWSPAPERS = [
  {
    date: '4/9/2021',
    preview: 'article 1 preview',
    articles: [
      {
        title: 'article 1',
        body: 'body 1',
      },
    ],
  },
  {
    date: '4/10/2021',
    preview: 'article 2 preview',
    articles: [
      {
        title: 'article 2',
        body: 'body 2',
      },
    ],
  },
  {
    date: '4/11/2021',
    preview: 'article 3 preview',
    articles: [
      {
        title: 'article 3',
        body: 'body 3',
      },
    ],
  },
]

function App() {
  useCoreService()
  const visibility = useVisibility()
  return (
    <Container>
      <Header>
        <div>
          <h1>Los Santos News</h1>
          <p>Visibility - {visibility.toString()}</p>
        </div>
        <Link to="/create-newspaper">
          <Button variant="contained" color="primary">
            Create Newspaper
          </Button>
        </Link>
      </Header>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <h2>Latest Newspapers</h2>
          </Grid>
          <Grid item xs={12}>
            <List>
              {SAMPLE_NEWSPAPERS.map((newspaper) => (
                <ArticleListItem newspaper={newspaper} />
              ))}
            </List>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default App
