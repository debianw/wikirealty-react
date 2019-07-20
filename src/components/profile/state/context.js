//
import React, { createContext, useReducer, useMemo, useContext } from 'react'
import { reducer, initialState } from './reducer'

const ProfileContext = createContext()

//
const ProfileProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(() => [state, dispatch], [state])

  return <ProfileContext.Provider value={value} {...props} />
}

//
const useProfile = () => {
  const context = useContext(ProfileContext)

  if (!context)
    throw new Error(`useProfile must be used within a ProfileProvider`)

  const [state, dispatch] = context

  return [
    state,
    dispatch,
  ]
}

//
export {
  useProfile,
  ProfileProvider,
}