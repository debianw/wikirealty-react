//
import React, { Fragment, useEffect } from 'react'
import PaperCard from '../../share/paper-card'
import ArticleListing from '../article/article-listing'
import Grid from '@material-ui/core/Grid'
import ProfileHeader from './profile-header'
import PropertyListing from '../property/property-listing'
import SocialListing from './profile-social-listing'
import useStyles from './styles'
import { useProfile, ProfileProvider } from './state/context'
import * as profileActions from './state/actions'

//
const Profile = ({
  userId = 0,
  nick = ""
}) => {
  const [state, dispatch] = useProfile()
  const classes = useStyles()
  const { loading: loadingProfile, profile } = state

  // Effect: fetch profile
  useEffect(() => {
    profileActions
      .fetch(dispatch)({
        userId,
        nick
      })
      .catch(error => console.log(`Error fetching profile: ${error.message}`))
  }, [dispatch, nick, userId])

  return (
    <Fragment>
      <Grid className={classes.headerSection} container item>
        <Grid item xs={12}>
          <ProfileHeader
            loading={loadingProfile}
            profile={profile}
          />
        </Grid>
      </Grid>

      <Grid className={classes.mainContainer} container item>
        <Grid item xs={12} md={5} className={classes.leftSideBar}>
          <PaperCard className={classes.socialLinks}>
            <SocialListing
              loading={loadingProfile}
              profile={profile}
            />
          </PaperCard>

          <PropertyListing
            filter__listing_category_id="2"
            lat="34.066888"
            lon="-118.300592"
            min__list_price="0"
            page="1"
            sort="featured"
            limit={200}
          />
        </Grid>

        <Grid item xs={12} md>
          <ArticleListing
            page={1}
            limit={20}
            authorId={userId}
            sort="last_updated_date__desc"
          />
        </Grid>
      </Grid>
    </Fragment>
  )
}

//
export {
  useProfile,
  ProfileProvider
}

//
export default Profile