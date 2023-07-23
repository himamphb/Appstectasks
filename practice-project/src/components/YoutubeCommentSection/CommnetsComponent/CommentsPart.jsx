import React, { Component } from 'react'
import './CommentsPart.scss'
import SortIcon from '@material-ui/icons/Sort';
import CommentsLists from './CommentsLists';

export default class CommentsPart extends Component {
  render() {
    const listArray = [{user:"@himamphb124",src:"person2.jpg",comment:"It will be good movie ,waiting to watch in theater"},
    {user:"@nirushetty123",src:"person3.jpg",comment:"waiting for the movie...😍"},
    {user:"@praveenkr12",src:"person4.jpg",comment:"Nolan movies are the best"},
    {user:"@vinaykumar999",src:"person5.jpg",comment:"Nolan fans assemble here....✌️"}
  ]
    return (
      <div className='comments-container'>
        <div className='sortSection'>
           <div>5 comments</div>
           <div className='sortDiv'><SortIcon/>Sort by</div>
        </div>
        <div className='addComment'>
          <div className='imageDiv'>
          <img src="person1.jpg" alt="" />
          </div>
          <div className='inputDiv'>
            <input type="text" placeholder='Add comment...'/>
          </div>
        </div>
        <div className='commentsLists'>
          {
            listArray.map((element) => {
             return <CommentsLists src={element.src} comment={element.comment} user = {element.user}/>
            })
          }
        </div>

      </div>
    )
  }
}
