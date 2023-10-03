import React from 'react'
import WeeklyForumPost from '../../components/forumComponents/WeeklyForumPost'
import ForumNav from '../../components/forumComponents/ForumNav'
import ForumMemberComponent from '../../components/forumComponents/ForumMemberComponent'

export default function WeeklyForumPage() {
  return (
    <>
      <ForumNav />
      <div className=' mx-[5%] md:w-[80%] m-auto md:flex justify-between'>
        <WeeklyForumPost />
        <ForumMemberComponent />
      </div>
    </>
  )
}
