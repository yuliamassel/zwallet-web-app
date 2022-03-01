const initialState = {
  data: [],
  loading: false,
  error: false
};

const TopupInput = (state = initialState, action = {}) => {
  switch (action.type) {
    case "TOPUP_INPUT_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "TOPUP_INPUT_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "TOPUP_INPUT_FAILED":
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

export default TopupInput;
