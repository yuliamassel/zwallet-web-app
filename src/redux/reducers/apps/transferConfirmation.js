const initialState = {
  data: [],
  loading: false,
  error: false
};

const TransferConfirmation = (state = initialState, action = {}) => {
  switch (action.type) {
    case "TRANSFER_CONFIRMATION_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "TRANSFER_CONFIRMATION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "TRANSFER_CONFIRMATION_FAILED":
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

export default TransferConfirmation;
