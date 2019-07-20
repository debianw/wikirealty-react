//
import React from 'react'
import GenericButton from '../../share/generic-button'
import { makeStyles } from '@material-ui/styles'

//
const useStyles = makeStyles(theme => ({
  root: {
    background: "#FFFFFF",
    color: "#4A4A4A",
    border: "2px solid",
    borderColor: "#4A4A4A",
  }
}))

//
const EmailButton = ({
  children,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <GenericButton
      iconName="email"
      className={classes.root}
      {...rest}
    >
      {children}
    </GenericButton>
  )
}

//
export default EmailButton 