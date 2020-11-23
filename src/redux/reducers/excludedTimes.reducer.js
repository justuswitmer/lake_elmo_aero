// sets excluded times after they are fetched
const excludedTimesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_EXCLUDED_TIMES':
      return action.payload;
    default:
      return state;
  }
};

export default excludedTimesReducer;