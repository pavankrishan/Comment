import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, onDelete} = props
  const {id, name, comment, isLiked, time, backgroundClassName} = commentDetails

  const onClickLikedIcon = () => {
    toggleIsLiked(id)
  }

  const onClickDelete = () => {
    onDelete(id)
  }

  const likedImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list-item">
      <div className={`avatar ${backgroundClassName}`}>
        <p>{name[0].toUpperCase()}</p>
      </div>
      <div className="content">
        <h1 className="name">{name}</h1>
        <span className="time">{formatDistanceToNow(time)} ago</span>
        <p className="comment">{comment}</p>
        <div className="actions">
          <button type="button" className="like-btn" onClick={onClickLikedIcon}>
            <img src={likedImg} alt="like" />
          </button>
          <button data-testid="delete" type="button" className="delete-btn" onClick={onClickDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
