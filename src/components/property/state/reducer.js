//
export const types = {
  FETCHING: 'FETCHING',
  FETCHED: 'FETCHED',
}

//
export const initialState = {
  loading: false,
  properties: []
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
        properties: action.payload,
        loading: false
      }
    //
    default:
      return state
  }
}