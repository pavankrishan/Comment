import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentList: [],
    name: '',
    comment: '',
    commentsCount: 0,
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    if (name && comment) {
      const randomBgClass =
        initialContainerBackgroundClassNames[
          Math.floor(
            Math.random() * initialContainerBackgroundClassNames.length,
          )
        ]

      const newComment = {
        id: uuidv4(),
        name,
        comment,
        isLiked: false,
        time: new Date(),
        backgroundClassName: randomBgClass,
      }

      this.setState(prevState => ({
        commentList: [...prevState.commentList, newComment],
        name: '',
        comment: '',
        commentsCount: prevState.commentsCount + 1,
      }))
    }
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment =>
        eachComment.id === id
          ? {...eachComment, isLiked: !eachComment.isLiked}
          : eachComment,
      ),
    }))
  }

  onDelete = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(
        eachComment => eachComment.id !== id,
      ),
      commentsCount: prevState.commentsCount - 1,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentList, commentsCount} = this.state

    return (
      <div>
        <h1>Comments</h1>
        <form onSubmit={this.onAddComment}>
          <p>Say something about 4.0 Technologies</p>
          <input
            value={name}
            onChange={this.onChangeName}
            placeholder="Your Name"
          />
          <br />
          <textarea
            value={comment}
            onChange={this.onChangeComment}
            rows="5"
            cols="21"
            placeholder="Your Comment"
          ></textarea>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
          <button type="submit">Add Comment</button>
        </form>
        <ul>
          <li>
            <p>{commentsCount}</p>
            <p>Comments</p>
          </li>
          {commentList.map(eachComment => (
            <CommentItem
              toggleIsLiked={this.toggleIsLiked}
              key={eachComment.id}
              onDelete={this.onDelete}
              commentDetails={eachComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
