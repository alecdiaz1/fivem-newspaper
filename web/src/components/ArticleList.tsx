import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider, Typography } from '@material-ui/core'
import styled from 'styled-components';

const StyledList = styled(List)`
  overflow-y: auto;
`

const ArticleList = (props: { articles: Article[] }) => (
  <StyledList>
    {props.articles.length > 0 
      ? props.articles.map((article) => (
        <>
          <ListItem>
            <ListItemText 
              primary={`Title: ${article.title}`} 
              secondary={`${article.body}`}
            />
          </ListItem>
          <Divider />
        </>
      ))
      : <Typography variant="body1">Add an article to get started</Typography>
    }
  </StyledList>
);

export default ArticleList;
