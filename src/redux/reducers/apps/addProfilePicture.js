const initialState = {
  data: [],
  loading: false,
  error: false
};

const NewProfilePicture = (state = initialState, action = {}) => {
  switch (action.type) {
    case "NEW_PROFILE_PICTURE_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "NEW_PROFILE_PICTURE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "NEW_PROFILE_PICTURE_FAILED":
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

export default NewProfilePicture;
