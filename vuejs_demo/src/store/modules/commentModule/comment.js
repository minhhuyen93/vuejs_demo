const defaultState = {
  comments: []
}

const actions = {
  ADD_COMMENT: function ({ commit }, newComment) {
    var setNewComment = {
      todo: newComment,
      status: false
    }
    commit('ADD_COMMENT_MUTATION', setNewComment)
  },
  DONE_COMMENT: function ({commit}, comment) {
    commit('DONE_COMMENT', comment)
  }
}

const mutations = {
  ADD_COMMENT_MUTATION: function (state, newComment) {
    state.comments.push(newComment)
  },
  DONE_COMMENT: function (state, doneComment) {
    state.comments.find(x => x.todo === doneComment).status = true
  }
}

const getters = {
  not_done: state => {
    var filtered = state.comments.filter(function (el) {
      return el.status === false
    })
    return filtered
  },
  done: state => {
    var filtered = state.comments.filter(function (el) {
      return el.status === true
    })
    return filtered
  }
}

export default {
  state: defaultState,
  actions,
  mutations,
  getters
}
