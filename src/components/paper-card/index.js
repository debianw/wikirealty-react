//
import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles'

//
const useStyles = makeStyles(theme => ({
  root: {
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 5px 0 rgba(0,0,0,.18)',
  },
}))

//
const PaperCard = ({
  children
}) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}> {children} </Paper>
  )
}

//
export default PaperCard