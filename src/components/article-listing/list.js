//
import React, { useEffect } from 'react'
import { useArticles } from './state/context'
import * as articleActions from './state/actions'
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

  // Effect: fetch articles
  useEffect(() => {
    articleActions
      .fetch(dispatch)({
        limit,
        authorId,
        sort
      })
      .catch(error => console.log(`Error fetching Articles: ${error.message}`))
  }, [limit, authorId, sort, dispatch])

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