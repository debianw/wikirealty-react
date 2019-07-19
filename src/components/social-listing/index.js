//
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import PaperCard from '../paper-card'
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
        <FacebookButton> Facebook </FacebookButton>
        <LinkedInButton> LinkedIn </LinkedInButton>
        <TwitterButton> Twitter </TwitterButton>
        <WebsiteButton> Website </WebsiteButton>
        <EmailButton> Email </EmailButton>
      </div>
    </PaperCard>
  )
}

//
export default SocialListing