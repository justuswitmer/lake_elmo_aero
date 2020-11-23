const price = (state = [], action) => {
    switch (action.type) {
        case "SET_PRICE":
            return action.payload;
        case "UPDATE_PRICE":
            return state;
        default:
            return state;
    }
};

export default price;