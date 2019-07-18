//
import React from 'react'
import Icon from '@material-ui/core/Icon'
import useStyles from './styles'

const properties = [
  {
    id: 1,
    pic: "https://photos.wikirealty.com/lh/resize/-x250/CLAWCA/16131308/1?lm=20190401T193633",
    beds: 0,
    baths: 0,
    sqft: 0,
    meta: {
      price: 120000,
      street: "Beverly Glen BLVD",
      state: "Los Angeles (City), CA",
    }
  },

  {
    id: 2,
    pic: "https://photos.wikirealty.com/lh/resize/-x250/CLAWCA/19467160/1?lm=20190524T143318",
    beds: 0,
    baths: 0,
    sqft: 0,
    meta: {
      price: 120000,
      street: "Beverly Glen BLVD",
      state: "Los Angeles (City), CA",
    }
  },

  {
    id: 3,
    pic: "https://photos.wikirealty.com/lh/resize/-x250/CLAWCA/16131308/1?lm=20190401T193633",
    beds: 0,
    baths: 0,
    sqft: 0,
    meta: {
      price: 120000,
      street: "Beverly Glen BLVD",
      state: "Los Angeles (City), CA",
    }
  },

  {
    id: 4,
    pic: "https://photos.wikirealty.com/lh/resize/-x250/CLAWCA/19467160/1?lm=20190524T143318",
    beds: 0,
    baths: 0,
    sqft: 0,
    meta: {
      price: 120000,
      street: "Beverly Glen BLVD",
      state: "Los Angeles (City), CA",
    }
  }

]

//
const PropertyListing = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
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