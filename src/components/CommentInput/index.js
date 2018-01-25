import React, {Component} from 'react'
import {connect} from 'dva'
import {Input, Button} from 'antd'
import './index.less'

const {TextArea} = Input

class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
        this.handleContentChange = this.handleContentChange.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit() {
        this.props.dispatch({
            type: 'app/addComment',
            comment: {
                username: this.state.username,
                content: this.state.content
            }
        })
        const t = [...this.props.app.comments, {
            username: this.state.username,
            content: this.state.content
        }]
        const temp = JSON.stringify(t)
        localStorage.setItem('comments', temp)
    }

    render() {
        return (
            <div className='comment-input-container'>
              <div>
                <div className='username-font'>用户名：</div>
                <div><Input className='username-container' type='text' onChange={this.handleUsernameChange} /></div>
              </div>
              <div>
                <div className='content-font'>评论内容：</div>
                <div><TextArea className='content-container' name="" id="" cols="20" rows="10"
                               onChange={this.handleContentChange} /></div>
              </div>
              <div className="comment-input-container-button">
                <Button type='primary' style={{'width': '100%'}} onClick={this.handleSubmit}>发布</Button>
              </div>
            </div>
        )
    }
}

export default connect(({app}) => ({app}))(CommentInput)
