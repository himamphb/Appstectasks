import React, { Component } from 'react'
import HeaderSection from './HeaderSection'
import VideoSection from './VideoSection'
import CommentsPart from './CommnetsComponent/CommentsPart'
import './CommentsSection.scss'

export default class CommentSection extends Component {
  render() {
    return (
      <div className='commentsParentDiv'>
      <HeaderSection/>
      <VideoSection/>
      <CommentsPart/>
      </div>
    )
  }
}
