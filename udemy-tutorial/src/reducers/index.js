export default (state = { name: 'hoge' }, action) => {
  console.log('action', action)
  switch (action.type) {
    case 'CHANGE_NAME':
      return Object.assign({}, state, { name: action.name })
    default:
      return state
  }
}
