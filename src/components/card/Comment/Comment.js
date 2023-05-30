import React from 'react'
import "./Comment.css"
import Avatar from "../../../assets/user.png"

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
        <img src={Avatar} alt="Avatar" />
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

          <div className="text-xs md:comment-body-content">
            {content} Nulla aute nisi quis nostrud reprehenderit nisi cillum mollit anim amet duis non esse.
          
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