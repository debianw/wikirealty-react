//
import { types as profileTypes } from './reducer'
import axios from 'axios'

export const fetch = dispatch => async (options = {}) => {
  try {
    dispatch({
      type: profileTypes.FETCHING
    })

    const { data: { hits } } = await axios.get(`https://wikirealty.com/api/v1.5/listings/serp/search`, {
      params: {
        ...options
      }
    })
    const { hits: data, ...meta } = hits
   
    dispatch({
      type: profileTypes.FETCHED,
      payload: {
        properties: data.map(record => record._source),
        ...meta
      } 
    })
  } catch(error) {
    console.log(`Error fetching properties: ${error.message}`)
  }
}