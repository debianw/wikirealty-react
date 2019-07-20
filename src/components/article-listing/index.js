//
import React from 'react'
import ArticleList from './list'
import { ArticlesProvider } from './state/context'

//
const Article = props => {
  return (
    <ArticlesProvider>
      <ArticleList {...props} />
    </ArticlesProvider>
  )
}

//
export default Article