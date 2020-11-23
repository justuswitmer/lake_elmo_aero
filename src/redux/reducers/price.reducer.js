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

export const savePrice = (state = {}, action) => {
    console.log('in savePrice reducer with state', state);
    console.log('in savePrice reducer with action', action);
    switch (action.type) {
        case "SAVE_PRICE_FOR_DB":
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default price;
