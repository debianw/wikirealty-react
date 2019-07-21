//
import React, { useEffect } from 'react'
import Icon from '@material-ui/core/Icon'
import useStyles from './styles'
import { useProperty } from '../state/context'
import * as propertyActions from '../state/actions'

//
const PropertyListing = ({
  filter__listing_category_id,
  lat,
  limit,
  lon,
  min__list_price,
  page,
  sort,
}) => {
  const [state, dispatch] = useProperty()
  const classes = useStyles()
  const { loading, properties } = state

  // Effect: fetch properties
  useEffect(() => {
    propertyActions
      .fetch(dispatch)({
        filter__listing_category_id,
        lat,
        limit,
        lon,
        min__list_price,
        page,
        sort,
      })
  }, [dispatch, filter__listing_category_id, lat, limit, lon, min__list_price, page, sort])

  return (
    <div className={classes.root}>
      {loading && <div>Loading Properties ...</div>}
      {properties.map(property => (
        <div key={property.id}>
          <div className={classes.boxTop} style={{ backgroundImage: `url(${property.pic})` }}>
            <div className={classes.meta}>
              <div className={classes.metaPrice}> ${property.meta.price} </div>
              <div className={classes.metaStreet}> {property.meta.street} </div>
              <div> {property.meta.state} </div>
            </div>
          </div>
          <div className={classes.boxBottom}>
            <div> <Icon className={classes.smallIcon}>settings</Icon> <span>2 Beds</span></div>
            <div> <Icon className={classes.smallIcon}>settings</Icon> 2 Baths </div>
            <div> <Icon className={classes.smallIcon}>settings</Icon> 1,239  Sq Ft. </div>
          </div>
        </div>
      ))}
    </div>
  )
}

//
export default PropertyListing