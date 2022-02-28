const initialState = {
  data: [],
  loading: false,
  error: false
};

const NewPhoneNumber = (state = initialState, action = {}) => {
  switch (action.type) {
    case "NEW_PHONE_NUMBER_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "NEW_PHONE_NUMBER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "NEW_PHONE_NUMBER_FAILED":
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

export default NewPhoneNumber;
