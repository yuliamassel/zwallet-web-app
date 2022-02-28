const initialState = {
  data: [],
  loading: false,
  error: false
};

const NewPin = (state = initialState, action = {}) => {
  switch (action.type) {
    case "NEW_PIN_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "NEW_PIN_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "NEW_PIN_FAILED":
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

export default NewPin;
