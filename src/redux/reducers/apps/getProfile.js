const initialState = {
  data: [],
  loading: false,
  error: false
};

const GetProfile = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_PROFILE_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "GET_PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "GET_PROFILE_FAILED":
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

export default GetProfile;
