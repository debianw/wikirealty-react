//
import { types as profileTypes } from './reducer'
import axios from 'axios'

export const fetch = dispatch => async (options = {}) => {
  try {
    dispatch({
      type: profileTypes.FETCHING
    })

    const { data } = await axios.get(`https://wikirealty.com/api/v1.5/accounts/profile/${options.nick}/`) 

    dispatch({
      type: profileTypes.FETCHED,
      payload: { ...data } 
    })

  } catch(error) {
    console.log(`Error fetching profile!`)
  }
}