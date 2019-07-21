//
import React, { createContext, useReducer, useMemo, useContext } from 'react'
import { reducer, initialState } from './reducer'

const ArticleContext = createContext()

//
const ArticleProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(() => [state, dispatch], [state])

  return <ArticleContext.Provider value={value} {...props} />
}

//
const useArticle = () => {
  const context = useContext(ArticleContext)

  if (!context)
    throw new Error(`useArticle must be used within a ArticleProvider`)

  const [state, dispatch] = context

  return {
    state,
    dispatch,
  }
}

//
export {
  useArticle,
  ArticleProvider,
}