//
import React from 'react'
import GenericButton from '../../../../share/generic-button'
import { makeStyles } from '@material-ui/styles'

//
const useStyles = makeStyles(theme => ({
  root: {
    background: "#4A4A4A",
    color: "#FFFFFF",
  }
}))

//
const WebsiteButton = ({
  children,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <GenericButton
      iconName="link"
      className={classes.root}
      {...rest}
    >
      {children}
    </GenericButton>
  )
}

//
export default WebsiteButton 