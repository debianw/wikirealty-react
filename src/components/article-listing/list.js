//
import React, { useEffect } from 'react'
import { useArticles } from './context'

//
const ArticleList = ({
  limit,
  authorId,
  sort,
}) => {
  const { actions, state } = useArticles()
  const { articles } = state

  // console.log(`limit: ${limit}`)
  // console.log(`authorId: ${authorId}`)
  // console.log(`sort: ${sort}`)

  useEffect(() => {
    console.log('ArticlesList mounted!')
    // Fetch List of articles
    actions.fetch({
      limit,
      authorId,
      sort
    })
  }, [actions, limit, authorId, sort])

  return (
    <div>
      {articles.map(article => (
        <div key={article.id}> {article.title} </div>
      ))}
    </div>
  )
}

//
export default ArticleList