//
export const types = {
  FETCHING: 'FETCHING',
  FETCHED: 'FETCHED',
}

//
export const initialState = {
  loading: false,
  properties: [],
  pages: 0,
  total: 0,
  page_size: 10,
  page: 1,
  max_score: 0,
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
        ...action.payload,
        loading: false
      }
    //
    default:
      return state
  }
}