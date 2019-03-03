const cartReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case 'REMOVE_FROM_CART':
            return state.filter((cartItem, index) => index !== state.indexOf(action.payload))
        default:
            return state;
    }
}

export default cartReducer;