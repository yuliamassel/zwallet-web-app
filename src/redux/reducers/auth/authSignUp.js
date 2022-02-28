const initialState = {
  data: [],
  loading: false,
  error: false
};

const AuthSignUp = (state = initialState, action = {}) => {
  switch (action.type) {
    case "AUTH_SIGNUP_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "AUTH_SIGNUP_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "AUTH_SIGNUP_FAILED":
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

export default AuthSignUp;
