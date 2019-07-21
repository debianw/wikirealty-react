//
import React, { useEffect } from 'react'
import _truncate from 'lodash/truncate'
import moment from 'moment'
import { useArticle } from '../state/context'
import * as articleActions from '../state/actions'
import useStyles from './styles'

//
const ArticleList = ({
  limit,
  authorId,
  sort,
  page,
}) => {
  const classes = useStyles()
  const { state, dispatch } = useArticle()
  const { articles } = state

  // Effect: fetch articles
  useEffect(() => {
    articleActions
      .fetch(dispatch)({
        limit,
        authorId,
        sort,
        page
      })
      .catch(error => console.log(`Error fetching Articles: ${error.message}`))
  }, [limit, authorId, sort, dispatch, page])

  const thumb = (images = []) => {
    const [thumb] = images
    return thumb && thumb.full
  }

  return (
    <div className={classes.root}>
      {state.loading && <div>Loading Articles ...</div>}
      {articles.map(article => (
        <div key={article.pk} className={classes.article}>
          <div className={classes.articlePic} style={{ backgroundImage: `url(${thumb(article.images)})` }}>
            <h2> {article.headline} </h2>
          </div>
          <div className={classes.articleDate}> {moment(article.date_created).fromNow()} </div>
          <div className={classes.articleDetail}>
            <h2 className={classes.articleTitle}> {article.headline} </h2>
            <div> {_truncate(article.body, { length: 200, separator: '' })} </div>
          </div>
        </div>
      ))}
    </div>
  )
}

//
export default ArticleList