//
import React from 'react'
import GenericButton from '../generic-button'
import { makeStyles } from '@material-ui/styles'

//
const useStyles = makeStyles(theme => ({
  root: {
    background: "#3B5998",
    color: "#FFFFFF",
  }
}))

//
const FacebookButton = ({
  children,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <GenericButton
      iconName="group"
      className={classes.root}
      {...rest}
    >
      {children}
    </GenericButton>
  )
}

//
export default FacebookButton