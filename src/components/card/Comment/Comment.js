import React from 'react'
import "./Comment.css"
function Comment(props) {
  const {
    username,
    date,
    chapterRead,
    content,
    like,
    reply,
    report
  } = props;

  return (
    <div className="comment">
    <div className="comment-header">
      <img src="favicon.ico" alt="Avatar" />
      <div className="comment-header-info">
        <h4>{username} MemoEO</h4>
        <div className="star-date">

          <div className="comment-header-date">
            {date} 5 ngày trước
          </div>
          <div className="comment-body-chapter">
          Chapter {chapterRead}
        </div>
        </div>
      </div>
    </div>
    <div className="comment-body">
      <div className="comment-body-info">

        <div className="comment-body-content">
          {content} Nulla aute nisi quis nostrud reprehenderit nisi cillum mollit anim amet duis non esse.
          Eu laborum fugiat magna reprehenderit reprehenderit tempor aliquip nisi officia irure qui ad. Labore pariatur ex ut aliqua ad
          exercitation deserunt eu nisi do velit mollit consequat in quis. Adipisicing magna
        </div>
      </div>
      <div className="comment-body-actions">
        <div className="comment-body-likes">
          {like} <i class="fa-solid fa-heart"></i> 120
        </div>
        <div className="comment-body-reply">
          {reply}  <i class="fa-sharp fa-solid fa-reply"></i> Trả lời
        </div>
        <div className="comment-body-report">
          {report} <i class="fa-solid fa-flag"></i> Báo xấu
        </div>
      </div>
    </div>
  </div>
  )
}

export default Comment