import axios from "axios";

export const NewPasswordRequest = () => {
  return {
    type: "NEW_PASSWORD_REQUEST"
  };
};
export const NewPasswordSuccess = (data) => {
  return {
    type: "NEW_PASSWORD_SUCCESS",
    payload: data
  };
};
export const NewPasswordFailed = (error) => {
  return {
    type: "NEW_PASSWORD_FAILED",
    payload: error
  };
};

export const NewPassword = ({ form, handleModalSuccess, setErrorMessage }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(NewPasswordRequest());
    return axios
      .put(
        `${process.env.REACT_APP_ZWALLET_API}/users/profile/change-password`,
        {
          currentPassword: form.currentPassword,
          newPassword: form.newPassword,
          repeatNewPassword: form.repeatNewPassword
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then((res) => {
        const data = res.data.data;
        handleModalSuccess();
        dispatch(NewPasswordSuccess(data));
      })
      .catch((err) => {
        const message = err.response.data;
        if (err.response.status === 500) {
          setErrorMessage("We have trouble");
        } else {
          setErrorMessage(err.response.data.message);
        }
        dispatch(NewPasswordFailed(message));
      });
  };
};
