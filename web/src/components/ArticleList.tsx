import React from 'react'
import { Divider, Typography, List, ListItem, ListItemText, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

interface ArticleListProps {
  articles: Article[];
  onClickArticle: (article: Article) => void;
  onDeleteArticle?: (article: Article) => void;
  selectedArticle?: Article | null;
}

const ArticleList = ({articles, onClickArticle, onDeleteArticle, selectedArticle}: ArticleListProps) => {
  return (
    <List>
      {articles.length > 0 
        ? articles.map((article) => (
          <>
            <ListItem
              style={{ 
                cursor: 'pointer', 
                backgroundColor: `${selectedArticle?.id === article.id ? '#f0f0f0' : 'inherit'}` 
              }} 
              onClick={() => onClickArticle(article)}
            >
              <ListItemText 
                primary={article.title} 
                secondary={article.body}
              />
              { onDeleteArticle && 
                <ListItemSecondaryAction onClick={() => onDeleteArticle(article)}>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
              }
            </ListItem>
            <Divider />
          </>
        ))
        : <Typography variant="body1">Add an article to get started</Typography>
      }
   </List>
  )
};

export default ArticleList;