import axios from "axios";

export const NewProfilePictureRequest = () => {
  return {
    type: "NEW_PROFILE_PICTURE_REQUEST"
  };
};
export const NewProfilePictureSuccess = (data) => {
  return {
    type: "NEW_PROFILE_PICTURE_SUCCESS",
    payload: data
  };
};
export const NewProfilePictureFailed = (error) => {
  return {
    type: "NEW_PROFILE_PICTURE_FAILED",
    payload: error
  };
};

export const NewProfilePicture = ({ formData, handleModalSuccess }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(NewProfilePictureRequest());
    return axios
      .put(
        `${process.env.REACT_APP_ZWALLET_API}/users/profile/picture`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data.data;
        handleModalSuccess();
        dispatch(NewProfilePictureSuccess(data));
      })
      .catch((err) => {
        const message = err.response;
        dispatch(NewProfilePictureFailed(message));
      });
  };
};
