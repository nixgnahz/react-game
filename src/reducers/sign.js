const sign = (state = 0, action) => {
  switch (action.type) {
    case 'changeSignStatus':
      return !state
    default:
      return state
  }
}

export default sign