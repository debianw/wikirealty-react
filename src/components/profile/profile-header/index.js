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

  const onMessage = () => console.log(`On Message ...`)
  const onCallNow = () => console.log(`On Call Now ...`)

  return (
    <div className={classes.root}>
      { loading && <div> Loading Profile ...</div>}
      { profile && (
        <Fragment>
          <div>
            <ProfileCard profile={profile} />
          </div>

          <div className={classes.actions}>
            <ActionButton href="#" onClick={onMessage}> Message </ActionButton>
            <ActionButton href="#" primary onClick={onCallNow}> Call Now </ActionButton>
          </div>
        </Fragment>
      )}
    </div>
  )
}

//
export default ProfileHeader