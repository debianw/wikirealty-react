//
import React from 'react'
import GenericButton from '../../../../share/generic-button'
import { makeStyles } from '@material-ui/styles'

//
const useStyles = makeStyles(theme => ({
  root: {
    background: "#0077B5",
    color: "#FFFFFF",
  }
}))

//
const LinkedInButton = ({
  children,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <GenericButton
      iconName="share"
      className={classes.root}
      {...rest}
    >
      {children}
    </GenericButton>
  )
}

//
export default LinkedInButton 