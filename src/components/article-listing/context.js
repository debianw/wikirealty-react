//
import React, { createContext, useReducer, useMemo, useContext } from 'react'
import { reducer, initialState } from './reducer'
import createActions from './actions'

const ArticlesContext = createContext()

//
const ArticlesProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(() => [state, dispatch], [state])

  return <ArticlesContext.Provider value={value} {...props} />
}

//
const useArticles = () => {
  const context = useContext(ArticlesContext)

  if (!context)
    throw new Error(`useArticles must be used within a ArticlesProvider`)

  const [state, dispatch] = context

  console.log('render')

  return {
    state,
    dispatch,
    actions: useMemo(() => createActions(dispatch, state), []),
  }
}

//
export {
  useArticles,
  ArticlesProvider,
}