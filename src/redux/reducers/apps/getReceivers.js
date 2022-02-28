const initialState = {
  data: [],
  loading: false,
  error: false
};

const GetReceivers = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_RECEIVERS_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "GET_RECEIVERS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "GET_RECEIVERS_FAILED":
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

export default GetReceivers;
