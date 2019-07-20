//
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import ProfileCard from '../../share/profile-card'
import ActionButton from '../../share/action-button'

//
const useStyles = makeStyles(theme => {
  return {
    root: {
      display: "flex",
      padding: "30px",
      [theme.breakpoints.down('sm')]: {
        padding: "10px 15px",
      },
      justifyContent: "space-between",
      alignItems: "center",
    },

    actions: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        display: "none"
      },
      "& > a": {
        marginRight: "10px"
      }
    },
  }
})

//
const ProfileHeader = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <ProfileCard />
      </div>

      <div className={classes.actions}>
        <ActionButton href="#"> Message </ActionButton>
        <ActionButton href="#" primary> Call Now </ActionButton>
      </div>
    </div>
  )
}

//
export default ProfileHeader