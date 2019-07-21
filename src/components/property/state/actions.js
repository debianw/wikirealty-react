//
import { types as profileTypes } from './reducer'

export const fetch = dispatch => async (options = {}) => {
  // console.log('options => ', options)

  dispatch({
    type: profileTypes.FETCHING
  })

  setTimeout(() => {
    dispatch({
      type: profileTypes.FETCHED,
      payload: [
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
    })
  }, 0)
}