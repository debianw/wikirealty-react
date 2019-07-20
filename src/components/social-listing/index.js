//
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import PaperCard from '../../share/paper-card'
import FacebookButton from './facebook-button'
import LinkedInButton from './linkedin-button'
import TwitterButton from './twitter-button'
import WebsiteButton from './website-button'
import EmailButton from './email-button'

//
const useStyles = makeStyles(theme => {
  return {
    root: {
      marginBottom: '20px',
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    },

    title: {
      color: "#4A4A4A",
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "18px",
      marginBottom: "20px",
    },

    actions: {
      "& > *": {
        marginBottom: "10px",
      }
    },

    socialButton: {

    }
  }
})

//
const SocialListing = () => {
  const classes = useStyles()

  return (
    <PaperCard className={classes.root}>
      <h2 className={classes.title}>Social Profiles</h2>
      <div className={classes.actions}>
        <FacebookButton href="https://facebook.com/lesternare" target="_blank"> Facebook </FacebookButton>
        <LinkedInButton href="https://linkedin.com/in/lesternare" target="_blank"> LinkedIn </LinkedInButton>
        <TwitterButton href="https://twitter.com/lesternare" target="_blank"> Twitter </TwitterButton>
        <WebsiteButton href="http://www.lesternare.com" target="_blank"> Website </WebsiteButton>
        <EmailButton href="mailto:lester@wikirealty.com" target="_blank"> Email </EmailButton>
      </div>
    </PaperCard>
  )
}

//
export default SocialListing