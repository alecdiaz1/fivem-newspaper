import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`

const ArticleListItem = ({ newspaper }) => {
  const dateObj = new Date(newspaper.created)

  return (
    <ListItem divider>
    <StyledLink to={`/view-newspaper/${newspaper.id}`}>
      <ListItemText primary={`${dateObj.toLocaleDateString()} - ${dateObj.toLocaleTimeString()}`} />
    </StyledLink>
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
  )
}

export default ArticleListItem
