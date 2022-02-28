import axios from "axios";

export const NewPinRequest = () => {
  return {
    type: "NEW_PIN_REQUEST"
  };
};
export const NewPinSuccess = (data) => {
  return {
    type: "NEW_PIN_SUCCESS",
    payload: data
  };
};
export const NewPinFailed = (error) => {
  return {
    type: "NEW_PIN_FAILED",
    payload: error
  };
};

export const NewPin = ({ PIN, handleModalSuccess, setErrorMessage }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(NewPinRequest());
    return axios
      .put(
        `${process.env.REACT_APP_ZWALLET_API}/users/PIN`,
        { PIN: PIN },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data.data;
        handleModalSuccess();
        dispatch(NewPinSuccess(data));
      })
      .catch((err) => {
        const message = err.response.data.message;
        if (err.response.status === 500) {
          setErrorMessage("We have trouble");
        } else {
          setErrorMessage(err.response.data.message);
        }
        dispatch(NewPinFailed(message));
      });
  };
};
