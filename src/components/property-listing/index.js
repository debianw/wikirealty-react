//
import React from 'react'
import { makeStyles } from '@material-ui/styles'

//
const useStyles = makeStyles(theme => {
  return {
    root: {
      marginBottom: '10px'
    }
  }
})

//
const PropertyListing = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}> List of Properties ... </div>
  )
}

//
export default PropertyListing