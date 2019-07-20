//
import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Icon from '@material-ui/core/Icon'
import useStyles from './styles'

//
const ProfileCard = () => {
  const classes = useStyles()

  return (
    <header className={classes.profileHeader}>
      <div> <Avatar className={classes.profileAvatar} alt="Lester" src="https://assets.wikirealty.com/media/images/avatars/7802-6f616632/lester-nare-ced6b589.jpeg" /> </div>
      <div>
        <h2 className={classes.profileHeaderTitle}> Lester Nare </h2>
        <div className={classes.profileHeaderCompany}> Wikirealty </div>
        <div className={classes.profileHeaderAreaServed}>
          <Icon className={classes.profileLocationIcon}>location_on</Icon>
          <span> Los Angeles, CA </span>
        </div>
      </div>
    </header>
  )
}

//
export default ProfileCard