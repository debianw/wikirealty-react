//
import Button from '@material-ui/core/Button'
import React, { useEffect } from 'react'
import { useArticles } from './context'
import * as articleActions from './actions'

//
const ArticleList = ({
  limit,
  authorId,
  sort,
}) => {
  const { state, dispatch } = useArticles()
  const { articles } = state

  useEffect(() => {
    // Fetch List of articles
    articleActions.fetch(dispatch)({
      limit,
      authorId,
      sort
    })
  }, [limit, authorId, sort, dispatch])

  console.log('state => ', state)

  return (
    <div>
      {state.loading && <div>Loading Articles ...</div>}
      {articles.map(article => (
        <div key={article.id}> {article.title} <Button variant="contained" color="primary"> HI </Button> </div>
      ))}
    </div>
  )
}

//
export default ArticleList