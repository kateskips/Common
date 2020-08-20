const everythingReducer = (state = [], action) => {
    switch (action.type) {
        case "EVERYTHING":
            return state
        default:
            return state
    }
}

export default everythingReducer