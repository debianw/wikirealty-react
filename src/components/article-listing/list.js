//
import React, { useEffect } from 'react'
import { useArticles } from './context'
import * as articleActions from './actions'
import useStyles from './styles'

//
const ArticleList = ({
  limit,
  authorId,
  sort,
}) => {
  const classes = useStyles()
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
    <div className={classes.root}>
      {state.loading && <div>Loading Articles ...</div>}
      {articles.map(article => (
        <div className={classes.article} key={article.id}>
          <div className={classes.articlePic} style={{ backgroundImage: `url(${article.pic})` }}>
            <h2> {article.title} </h2>
          </div>
          <div className={classes.articleDate}> {article.reatedDate} </div>
          <div className={classes.articleDetail}>
            <h2 className={classes.articleTitle}> {article.title} </h2>
            <div> {article.description} </div>
          </div>
        </div>
      ))}
    </div>
  )
}

//
export default ArticleList