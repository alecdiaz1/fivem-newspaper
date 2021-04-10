import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider, Typography } from '@material-ui/core'

const ArticleList = (props: { articles: Article[] }) => (
  <List>
    {props.articles.length > 0 
      ? props.articles.map((article) => (
        <>
          <ListItem>
            <ListItemText 
              primary={article.title} 
              secondary={article.body}
            />
          </ListItem>
          <Divider />
        </>
      ))
      : <Typography variant="body1">Add an article to get started</Typography>
    }
  </List>
);

export default ArticleList;
