//
import React from 'react'
import Profile, { ProfileProvider } from '../components/profile'

//
const ProfileContainer = () => {
  return (
    <ProfileProvider>
      <Profile
        userId={7869}
        nick="lester"
      />
    </ProfileProvider>
  )
}

//
export default ProfileContainer