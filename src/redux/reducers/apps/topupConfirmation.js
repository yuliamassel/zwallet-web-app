const initialState = {
  data: [],
  loading: false,
  error: false
};

const TopupConfirmation = (state = initialState, action = {}) => {
  switch (action.type) {
    case "TOPUP_CONFIRMATION_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "TOPUP_CONFIRMATION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "TOPUP_CONFIRMATION_FAILED":
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

export default TopupConfirmation;
