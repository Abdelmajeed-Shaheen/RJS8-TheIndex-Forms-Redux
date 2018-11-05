import * as actionTypes from "../actions/actionTypes";

const initialState = {
  author: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHOR_DETAIL:
      return {
        ...state,
        author: action.payload
      };

    case actionTypes.POST_BOOK:
    //UPDATE THE STATE ACCORDINGLY
    default:
      return state;
  }
};

export default reducer;
