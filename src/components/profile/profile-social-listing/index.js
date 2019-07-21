//
import React, { Fragment } from 'react'
import FacebookButton from './social-buttons/facebook-button'
import LinkedInButton from './social-buttons/linkedin-button'
import TwitterButton from './social-buttons/twitter-button'
import WebsiteButton from './social-buttons/website-button'
import EmailButton from './social-buttons/email-button'
import useStyles from './styles'

//
const ProfileSocialListing = ({
  loading,
  profile,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {loading && <div>Loading Profile ...</div>}
      {profile && (
        <Fragment>
          <h2 className={classes.title}>Social Profiles</h2>
          <div className={classes.actions}>
            <FacebookButton href={profile.facebook_url} target="_blank"> Facebook </FacebookButton>
            <LinkedInButton href={profile.linkedin_url} target="_blank"> LinkedIn </LinkedInButton>
            <TwitterButton href={profile.twitter_url} target="_blank"> Twitter </TwitterButton>
            <WebsiteButton href={profile.website_url} target="_blank"> Website </WebsiteButton>
            <EmailButton href={`mailto:${profile.email}`} target="_blank"> Email </EmailButton>
          </div>
        </Fragment>
      )}
    </div>
  )
}

//
export default ProfileSocialListing 