//
import { types as profileTypes } from './reducer'
import axios from 'axios'
import config from '../../../config'

export const fetch = dispatch => async (options = {}) => {
  try {
    dispatch({
      type: profileTypes.FETCHING
    })

    const { data: { hits } } = await axios.get(`${config.apiURL}/listings/serp/search`, {
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