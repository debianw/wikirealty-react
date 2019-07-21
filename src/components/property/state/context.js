//
import React, { createContext, useReducer, useMemo, useContext } from 'react'
import { reducer, initialState } from './reducer'

const PropertyContext = createContext()

//
const PropertyProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(() => [state, dispatch], [state])

  return <PropertyContext.Provider value={value} {...props} />
}

//
const useProperty = () => {
  const context = useContext(PropertyContext)

  if (!context)
    throw new Error(`useProperty must be used within a PropertyProvider`)

  const [state, dispatch] = context

  return [
    state,
    dispatch,
  ]
}

//
export {
  useProperty,
  PropertyProvider,
}