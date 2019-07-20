//
import React, { Fragment } from 'react'
import PaperCard from '../../../share/paper-card'
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

  if (loading)
    return (
      <PaperCard className={classes.root}>
        Loading Profile ...
      </PaperCard>
    )

  return (
    <PaperCard className={classes.root}>
      {loading && <div>Loading Profile ...</div>}
      {profile && (
        <Fragment>
          <h2 className={classes.title}>Social Profiles</h2>
          <div className={classes.actions}>
            <FacebookButton href="https://facebook.com/lesternare" target="_blank"> Facebook </FacebookButton>
            <LinkedInButton href="https://linkedin.com/in/lesternare" target="_blank"> LinkedIn </LinkedInButton>
            <TwitterButton href="https://twitter.com/lesternare" target="_blank"> Twitter </TwitterButton>
            <WebsiteButton href="http://www.lesternare.com" target="_blank"> Website </WebsiteButton>
            <EmailButton href="mailto:lester@wikirealty.com" target="_blank"> Email </EmailButton>
          </div>
        </Fragment>
      )}
    </PaperCard>
  )
}

//
export default ProfileSocialListing 