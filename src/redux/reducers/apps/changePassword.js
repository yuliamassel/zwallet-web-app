const initialState = {
  data: [],
  loading: false,
  error: false
};

const NewPassword = (state = initialState, action = {}) => {
  switch (action.type) {
    case "NEW_PASSWORD_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "NEW_PASSWORD_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "NEW_PASSWORD_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: []
      };
    default:
      return state;
  }
};

export default NewPassword;
