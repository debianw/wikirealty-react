//
import React from 'react'
import GenericButton from '../generic-button'
import { makeStyles } from '@material-ui/styles'

//
const useStyles = makeStyles(theme => ({
  root: {
    background: "#00ACED",
    color: "#FFFFFF",
  }
}))

//
const TwitterButton = ({
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
export default TwitterButton 