//
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classnames from 'classnames'
import Icon from '@material-ui/core/Icon'

//
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    borderRadius: "1.86px",
    padding: "10px",
    cursor: "pointer",
    textDecoration: "none",
  },

  buttonText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "600",
    marginLeft: "-24px",
  },

  icon: {

  }
}))

//
const GenericButton = ({
  iconName,
  className,
  children,
  ...rest
}) => {
  const classes = useStyles()
  const composeClassNames = classnames(`${classes.root} ${className}`)

  return (
    <a className={composeClassNames} {...rest}>
      <Icon className={classes.icon}>{iconName || 'settings'}</Icon>
      <span className={classes.buttonText}> {children} </span>
    </a>
  )
}

//
export default GenericButton