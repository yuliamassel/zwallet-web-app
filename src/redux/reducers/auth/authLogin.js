const initialState = {
  data: [],
  loading: false,
  error: false
};

const AuthLogin = (state = initialState, action = {}) => {
  switch (action.type) {
    case "AUTH_LOGIN_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "AUTH_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "AUTH_LOGIN_FAILED":
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

export default AuthLogin;
