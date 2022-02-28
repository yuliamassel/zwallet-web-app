const initialState = {
  data: [],
  loading: false,
  error: false
};

const PINConfirm = (state = initialState, action = {}) => {
  switch (action.type) {
    case "PIN_CONFIRM_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "PIN_CONFIRM_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "PIN_CONFIRM_FAILED":
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

export default PINConfirm;
