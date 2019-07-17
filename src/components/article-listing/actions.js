//
import { types as articleTypes } from './reducer'

/**
 * Fetch Articles 
 * 
 * @param {*} dispatch 
 * @param {*} state 
 */

export const fetch = dispatch => (options = {}) => {
  console.log('options => ', options)

  dispatch({
    type: articleTypes.FETCHING
  })

  setTimeout(() => {
    dispatch({
      type: articleTypes.FETCHED,
      payload: [
        { id: 1, title: 'Article #1', description: 'Article description #1' },
        { id: 2, title: 'Article #2', description: 'Article description #2' },
        { id: 3, title: 'Article #3', description: 'Article description #3' },
        { id: 4, title: 'Article #4', description: 'Article description #4' },
      ]
    })
  }, 2000)
}