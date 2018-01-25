export default {
  namespace: 'app',
  state: {
    comments: []
  },
  subscriptions: {},
  effects: {},
  reducers: {
    initComment(state, payload) {
      console.log(payload)
      return {
        ...state,
        comments: payload.comments
      }
    },
    addComment(state, payload) {
      return {
        ...state,
        comments: [
          ...state.comments,
          payload.comment
        ]
      }
    },
    deleteComment(state, payload) {
      const a1 = state.comments.slice(0, payload.index)
      const a2 = state.comments.slice(payload.index + 1)
      const f = a1.concat(a2)
      localStorage.setItem('comments', JSON.stringify(f))
      return {
        ...state,
        comments: f
      }
    }
  }
}
