//
import React, { Fragment } from 'react'
import ArticleListing from '../../components/article-listing'
import Grid from '@material-ui/core/Grid'
import ProfileHeader from '../../components/profile-header'
import PropertyListing from '../../components/property-listing'
import SocialListing from '../../components/social-listing'
import useStyles from './styles'

//
const Profile = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Grid className={classes.headerSection} container item>
        <Grid item xs={12}>
          <ProfileHeader />
        </Grid>
      </Grid>

      <Grid className={classes.mainContainer} container item>
        <Grid item xs={12} md={4} className={classes.leftSideBar}>
          <SocialListing />
          <PropertyListing />
        </Grid>

        <Grid item xs={12} md>
          <ArticleListing
            limit={20}
            authorId={7869}
            sort="last_updated_date__desc"
          />
        </Grid>
      </Grid>
    </Fragment>
  )
}

//
export default Profile