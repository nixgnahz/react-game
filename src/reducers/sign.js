export default (state = false, action) => {
    if(action.type === "changeSignStatus") {
        return !state
    } else{
        return state
    }
}