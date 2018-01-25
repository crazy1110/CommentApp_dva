import React, {Component} from 'react'
import {connect} from 'dva'
import './inedx.less'

class Comment extends Component {
    constructor(props) {
        super(props)
    }

    handleDeleteComment(index) {
        this.props.dispatch({
          type: 'app/deleteComment', index: index})
    }

    render() {
        const comments = this.props.app.comments
        console.log(comments)
        return (
            <div>
                {comments.map((comment, i) => {
                    return (
                        <div className='comment-show-container' key={i}>
                          <span className='username-show-container'>{comment.username}</span>:
                          <span className='content-show-container'>{comment.content}</span>
                          <a className='delete-container' onClick={this.handleDeleteComment.bind(this, i)}>删除</a>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default connect(({app}) => ({app}))(Comment)
