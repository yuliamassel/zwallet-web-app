const initialState = {
  data: [],
  loading: false,
  error: false
};

const AuthCreatePIN = (state = initialState, action = {}) => {
  switch (action.type) {
    case "AUTH_CREATE_PIN_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "AUTH_CREATE_PIN_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "AUTH_CREATE_PIN_FAILED":
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

export default AuthCreatePIN;
