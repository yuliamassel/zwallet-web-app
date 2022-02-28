const initialState = {
  data: [],
  loading: false,
  error: false
};

const PINConfirmation = (state = initialState, action = {}) => {
  switch (action.type) {
    case "PIN_CONFIRMATION_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "PIN_CONFIRMATION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "PIN_CONFIRMATION_FAILED":
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

export default PINConfirmation;
