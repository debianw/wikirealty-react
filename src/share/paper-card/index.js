//
import React from 'react'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'

//
const useStyles = makeStyles(theme => ({
  root: {
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 5px 0 rgba(0,0,0,.18)',
  },
}))

//
const PaperCard = ({
  children,
  className,
  ...rest
}) => {
  const classes = useStyles()
  const composeClassName = classnames(`${className} ${classes.root}`)

  return (
    <Paper className={composeClassName} {...rest}> {children} </Paper>
  )
}

//
export default PaperCard