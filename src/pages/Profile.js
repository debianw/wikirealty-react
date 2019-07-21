//
import React from 'react'
import Profile, { ProfileProvider } from '../components/profile'
import { ArticleProvider } from '../components/article'
import { PropertyProvider } from '../components/property'

//
const ProfileContainer = () => {
  return (
    <ProfileProvider><ArticleProvider><PropertyProvider>
      <Profile
        userId={7869}
        nick="lester"
      />
    </PropertyProvider></ArticleProvider></ProfileProvider>
  )
}

//
export default ProfileContainer