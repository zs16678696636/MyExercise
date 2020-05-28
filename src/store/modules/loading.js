const state = {
  loadingFlage: false
}
const mutations = {
  loadingFlageSj(state, value) {
    state.loadingFlage = value
  }
}
export default { state, mutations }