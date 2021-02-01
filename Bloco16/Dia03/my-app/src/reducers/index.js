const INITIAL_STATE = [];

function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.user];
    default:
      return state;
  }
}

export default Reducer;