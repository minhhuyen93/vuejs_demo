export const commentMutations = {
  addComent (state, newComment) {
    state.comments.push(newComment)
  },
  doneComment (state, doneComment) {
    state.comments.find(x => x.todo === doneComment).status = true
  }
}
