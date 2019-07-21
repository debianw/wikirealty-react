//
import { types as articleTypes } from './reducer'
import axios from 'axios'

/**
 * Fetch Articles 
 * 
 * @param {*} dispatch 
 * @param {*} state 
 */

export const fetch = dispatch => async ({
  limit,
  authorId,
  page,
  sort
}) => {
  try {
    dispatch({
      type: articleTypes.FETCHING
    })

    const { data: { hits }} = await axios.get(`https://wikirealty.com/api/v1.5/tips/serp/search`, {
      params: {
        limit,
        "must__author.id": authorId,
        page,
        sort,
      }
    })
    const { hits: data, ...meta } = hits

    dispatch({
      type: articleTypes.FETCHED,
      payload: {
        articles: data.map(record => record._source),
        ...meta
      } 
    })

  } catch(error) {
    console.log(`Error fetching articles: ${error.message}`)
  }
}