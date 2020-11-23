const price = (state = [], action) => {
  switch (action.type) {
    case "SET_PRICE":
      return action.payload;
    default:
      return state;
  }
};

export default price;
