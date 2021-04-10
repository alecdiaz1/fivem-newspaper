import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import ArticleCreator from '../../components/ArticleCreator/ArticleCreator'
import styled from 'styled-components'

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
    <div>
      <Link to="/">
        <Button variant="contained" color="primary">
          Back
        </Button>
      </Link>
      <ArticleCreator
        onSubmit={(newArticle: Article) => addNewArticle(newArticle)}
      />
      <div>
        {articles.map((article) => (
          <Article>
            <h2>Title: {article.title}</h2>
            <p>{article.body}</p>
          </Article>
        ))}
      </div>
    </div>
  )
}

export default CreateNewspaper
