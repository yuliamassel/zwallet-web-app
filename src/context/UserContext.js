import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);
const UserProvider = (props) => {
  const [user, setUser] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const id = JSON.parse(localStorage.getItem("userId"));
    if (id) {
      axios
        .get(`${process.env.REACT_APP_ZWALLET_API}/users/details/${id}`, {
          headers: { auth: "admin" }
        })
        .then((res) => {
          setLoading(false);
          const result = res.data.data;
          setUser(result);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.response);
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
