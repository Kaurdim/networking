import React from 'react';
import moment from 'moment';

import './Comments.css';


export const Comments = ({ comments }) => {
  return (
    <div className='comments'>
      <ul className='comments-list'>
        {comments.map(comment => (
          <li className='comments-list-item' key={comment.title}>
            <Comment comment={comment}/>
          </li>
        ))}
      </ul>
    </div>
  )
} 

const Comment = ({ comment }) => (
  <div className='comment'>
    <h3 className='comment-header'>{comment.title}
      <span className='comment-date'>
        {moment.unix(comment.time).format('DD.MM.YYYY HH:mm')}
      </span>
    </h3>
    <p className='comment-phone'>{comment.phoneNumber}</p>
    <p className='comment-body'>{comment.commentBody}</p>
  </div>
)