const initialState = {
  data: [],
  loading: false,
  error: false
};

const DeletePhoneNumber = (state = initialState, action = {}) => {
  switch (action.type) {
    case "DELETE_PHONE_NUMBER_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "DELETE_PHONE_NUMBER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "DELETE_PHONE_NUMBER_FAILED":
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

export default DeletePhoneNumber;
