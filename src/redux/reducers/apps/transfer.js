const initialState = {
  data: [],
  loading: false,
  error: false
};

const TransferInput = (state = initialState, action = {}) => {
  switch (action.type) {
    case "TRANSFER_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "TRANSFER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "TRANSFER_FAILED":
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

export default TransferInput;
