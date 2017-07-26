export const ActionTypes = {
  UPDATE_CONFERENCES: "UPDATE_CONFERENCES"
};

const initialState = {
  conferences: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_CONFERENCES:
      return {
        ...state,
        conferences: action.payload
      };
    default:
      return state;
  }
};
