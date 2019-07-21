//
import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Icon from '@material-ui/core/Icon'
import useStyles from './styles'

//
const ProfileCard = ({
  profile
}) => {
  const classes = useStyles()

  if (!profile) return null

  return (
    <header className={classes.profileHeader}>
      <div> <Avatar className={classes.profileAvatar} alt={profile.full_name} src={profile.avatar} /> </div>
      <div>
        <h2 className={classes.profileHeaderTitle}> {profile.full_name} </h2>
        <div className={classes.profileHeaderCompany}> {profile.company_name} </div>
        <div className={classes.profileHeaderAreaServed}>
          <Icon className={classes.profileLocationIcon}>location_on</Icon>
          <span> {profile.area_served} </span>
        </div>
      </div>
    </header>
  )
}

//
export default ProfileCard