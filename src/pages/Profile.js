//
import React from 'react'
import ArticleListing from '../components/article-listing'

//
const Profile = () => (
  <div>
    <div> HEADER </div>
    <div> List of Social </div>
    <div> List of Properties </div>
    <div>
      <ArticleListing
        limit={20}
        authorId={7869}
        sort="last_updated_date__desc"
      />
    </div>
  </div>
)

//
export default Profile