//
import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles'

//
const useStyles = makeStyles(theme => {
  return {
    root: {
      marginBottom: '10px',
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    },
    paper: {
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 5px 0 rgba(0,0,0,.18)',
      marginBottom: '10px',
    },
  }
})

//
const SocialListing = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}> List of Social </Paper>
    </div>
  )
}

//
export default SocialListing