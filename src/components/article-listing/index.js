//
import React from 'react'
import ArticleList from './list'
import { ArticlesProvider } from './context'

//
const ArticleListing = props => {
  return (
    <ArticlesProvider>
      <ArticleList {...props} />
    </ArticlesProvider>
  )
}

//
export default ArticleListing