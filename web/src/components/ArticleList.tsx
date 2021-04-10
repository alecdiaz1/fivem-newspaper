import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider } from '@material-ui/core'

const ArticleList = (props: { articles: Article[] }) => (
  <List>
    {props.articles.map((article) => (
      <>
        <ListItem>
          <ListItemText 
            primary={`Title: ${article.title}`} 
            secondary={`${article.body}`}
          />
        </ListItem>
        <Divider />
      </>
    ))}
  </List>
);

export default ArticleList;
