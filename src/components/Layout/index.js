import React, {Component} from 'react'
import Comment from '../Comment/index'
import CommentInput from '../CommentInput/index'
import {connect} from 'dva'
import './index.less'

class LayoutContent extends Component {
    constructor(){
        super()
    }

    componentWillMount(){
        if (localStorage.getItem('comments')) {
            const comments = JSON.parse(localStorage.getItem('comments'))
            this.props.dispatch({type: 'app/initComment', comments: comments})
        }
    }

  render(){
    return(
        <div className="layout-container">
          <div className="comment-app-container">
            <CommentInput />
            <Comment />
          </div>
        </div>
    )
  }
}

export default connect(({app}) => ({app}))(LayoutContent)