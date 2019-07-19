//
import React from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'

//
const useStyles = makeStyles(theme => ({
  root: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#4a4a4a",
    background: "#fff",
    border: "2px solid #4a4a4a",
    borderRadius: "100px",
    padding: "0 20px",
    height: "40px",
    outlineStyle: "none",
    textDecoration: "none",
    lineHeight: "36px"
  },
  primary: {
    background: "linear-gradient(135.03deg,#46474b 0,#16171b 100%)",
    color: "#FFFFFF",
  }
}))

//
const ActionButton = ({
  primary,
  children,
  className,
  ...rest
})  => {
  const classes = useStyles()
  const composeClassNames = classnames(classes.root, {
    [`${classes.primary}`]: primary,
  })

  return (
    <a className={`${composeClassNames} ${className}`} {...rest}>{children}</a>
  )
}

//
export default ActionButton