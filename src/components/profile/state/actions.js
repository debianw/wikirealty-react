//
import { types as profileTypes } from './reducer'
import axios from 'axios'
import config from '../../../config'

export const fetch = dispatch => async (options = {}) => {
  try {
    dispatch({
      type: profileTypes.FETCHING
    })

    const { data } = await axios.get(`${config.apiURL}/accounts/profile/${options.nick}/`) 

    dispatch({
      type: profileTypes.FETCHED,
      payload: { ...data } 
    })

  } catch(error) {
    console.log(`Error fetching profile!`)
  }
}