export default (state = 0, action) => {
    if(action.type === "changeSignStatus") {
        return !state
    } else{
        return state
    }
}