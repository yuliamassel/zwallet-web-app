const initialState = {
  data: [],
  loading: false,
  error: false
};

const TopupMethod = (state = initialState, action = {}) => {
  switch (action.type) {
    case "TOPUP_METHOD_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "TOPUP_METHOD_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "TOPUP_METHOD_FAILED":
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

export default TopupMethod;
