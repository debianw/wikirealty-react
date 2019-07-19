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
}) => {
  const classes = useStyles()
  const composeClassNames = classnames(`${classes.root} ${className}`)

  return (
    <div className={composeClassNames}>
      <Icon className={classes.icon}>{iconName || 'settings'}</Icon>
      <span className={classes.buttonText}> {children} </span>
    </div>
  )
}

//
export default GenericButton