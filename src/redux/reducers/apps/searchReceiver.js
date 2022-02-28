const initialState = {
  data: [],
  loading: false,
  error: false
};

const SearchReceiver = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SEARCH_RECEIVER_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "SEARCH_RECEIVER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "SEARCH_RECEIVER_FAILED":
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

export default SearchReceiver;
