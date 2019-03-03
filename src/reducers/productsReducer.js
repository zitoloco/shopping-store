const productsReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_INITIAL_ITEMS':
            return state.concat(action.payload)
        default:
            return state;
    }
}

export default productsReducer;