//
export const types = {
  FETCHING: 'FETCHING',
  FETCHED: 'FETCHED'
}

//
export const initialState = {
  loading: false,
  articles: []
}

//
export const reducer = (state, action) => {
  switch (action.type) {
    //
    case types.FETCHING:
      return {
        ...state,
        loading: true
      }
    //
    case types.FETCHED:
      return {
        ...state,
        articles: action.payload,
        loading: false
      }
    //
    default:
      return state
  }
}