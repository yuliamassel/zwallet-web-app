import axios from "axios";

export const AuthSignUpRequest = () => {
  return {
    type: "AUTH_SIGNUP_REQUEST"
  };
};
export const AuthSignUpSuccess = (data) => {
  return {
    type: "AUTH_SIGNUP_SUCCESS",
    payload: data
  };
};
export const AuthSignUpFailed = (error) => {
  return {
    type: "AUTH_SIGNUP_FAILED",
    payload: error
  };
};

export const AuthSignUp = ({ form, handleModalSuccess, setErrorMessage }) => {
  return (dispatch) => {
    dispatch(AuthSignUpRequest());
    axios
      .post(`${process.env.REACT_APP_ZWALLET_API}/users/register`, {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password
      })
      .then((res) => {
        const data = res.data.data;
        const userId = data.id;
        handleModalSuccess();
        localStorage.setItem("userId", JSON.stringify(userId));
        dispatch(AuthSignUpSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        if (err.response.status === 403) {
          setErrorMessage(err.response.data.message);
        } else {
          setErrorMessage("We have trouble");
        }
        dispatch(AuthSignUpFailed(message));
      });
  };
};
