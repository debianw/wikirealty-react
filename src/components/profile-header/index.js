//
import React from 'react'
import { makeStyles } from '@material-ui/styles'

//
const useStyles = makeStyles(theme => {
  return {
    root: {
      padding: '30px',
      [theme.breakpoints.down('sm')]: {
        padding: '10px 15px',
      }
    }
  }
})

//
const ProfileHeader = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}> HEADER </div>
  )
}

//
export default ProfileHeader