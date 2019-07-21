//
import React, { useEffect } from 'react'
import Icon from '@material-ui/core/Icon'
import useStyles from './styles'
import { useProperty } from '../state/context'
import * as propertyActions from '../state/actions'
import { moneyFormat } from '../../../utils/helpers'

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
        <div key={property.pk}>
          <div className={classes.boxTop} style={{ backgroundImage: `url(${property.thumbnails.size_varx250})` }}>
            <div className={classes.meta}>
              <div className={classes.metaPrice}> ${moneyFormat(property.list_price)} </div>
              <div className={classes.metaStreet}> {property.full_address} </div>
              <div> {property.address.city}, {property.address.state_province} </div>
            </div>
          </div>
          <div className={classes.boxBottom}>
            <div> <Icon className={classes.smallIcon}>settings</Icon> <span>{property.bedrooms} Beds</span></div>
            <div> <Icon className={classes.smallIcon}>settings</Icon> <span>{property.bathrooms} Baths</span></div>
            <div> <Icon className={classes.smallIcon}>settings</Icon> <span>{property.living_area.area} {property.living_area.units}</span> </div>
          </div>
        </div>
      ))}
    </div>
  )
}

//
export default PropertyListing