//
import { types as profileTypes } from './reducer'

export const fetch = dispatch => async (options = {}) => {
  console.log('options => ', options)

  dispatch({
    type: profileTypes.FETCHING
  })

  setTimeout(() => {
    dispatch({
      type: profileTypes.FETCHED,
      payload: {
        display_name: "Lester N.",
        role: "Chief Marketing and Product Officer"
      }
    })
  }, 0)
}