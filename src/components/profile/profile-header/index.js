//
import React, { Fragment } from 'react'
import ProfileCard from '../../../share/profile-card'
import ActionButton from '../../../share/action-button'
import useStyles from './styles'

//
const ProfileHeader = ({
  loading,
  profile
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      { loading && <div> Loading Profile ...</div>}
      { profile && (
        <Fragment>
          <div>
            <ProfileCard />
          </div>

          <div className={classes.actions}>
            <ActionButton href="#"> Message </ActionButton>
            <ActionButton href="#" primary> Call Now </ActionButton>
          </div>
        </Fragment>
      )}
    </div>
  )
}

//
export default ProfileHeader