const initialState = {
  data: [],
  loading: false,
  error: false
};

const GetDetailsReceiver = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_DETAILS_RECEIVER_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "GET_DETAILS_RECEIVER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "GET_DETAILS_RECEIVER_FAILED":
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

export default GetDetailsReceiver;
