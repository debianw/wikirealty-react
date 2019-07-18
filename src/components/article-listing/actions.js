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
        {
          id: 1,
          title: 'How To Spend National Relaxation Day In Koreatown',
          description: 'It’s Wednesday, August 15th, which means it is National Relaxation Day!',
          pic: "https://assets.wikirealty.com/media/tips/27280/images/how-to-spend-national-relaxation-day-in-kore-6284b2402d4297ef222658948668cf41.jpeg",
          reatedDate: "a year ago",

        },
        {
          id: 2,
          title: 'How To Spend National Relaxation Day In Koreatown',
          description: 'It’s Wednesday, August 15th, which means it is National Relaxation Day!',
          pic: "https://assets.wikirealty.com/media/tips/27280/images/how-to-spend-national-relaxation-day-in-kore-6284b2402d4297ef222658948668cf41.jpeg",
          reatedDate: "a year ago",

        },
        {
          id: 3,
          title: 'How To Spend National Relaxation Day In Koreatown',
          description: 'It’s Wednesday, August 15th, which means it is National Relaxation Day!',
          pic: "https://assets.wikirealty.com/media/tips/27280/images/how-to-spend-national-relaxation-day-in-kore-6284b2402d4297ef222658948668cf41.jpeg",
          reatedDate: "a year ago",

        },
        {
          id: 4,
          title: 'How To Spend National Relaxation Day In Koreatown',
          description: 'It’s Wednesday, August 15th, which means it is National Relaxation Day!',
          pic: "https://assets.wikirealty.com/media/tips/27280/images/how-to-spend-national-relaxation-day-in-kore-6284b2402d4297ef222658948668cf41.jpeg",
          reatedDate: "a year ago",

        },
      ]
    })
  }, 2000)
}