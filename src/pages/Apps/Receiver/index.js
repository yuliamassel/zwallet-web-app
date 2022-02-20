import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Input from "../../../components/base/Input";
import img from "../../../assets/img/blank-profile-picture.png";

const Receiver = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams(); // ini untuk mengatur query param
  const querySearch = searchParams.get("search"); // ini menangkap dari setSearchParam di bawah, msk ke var
  const navigate = useNavigate();

  useEffect(() => {
    if (querySearch) {
      axios
        .get(
          `${process.env.REACT_APP_ZWALLET_API}/users/search?name=${querySearch}&sort=created_at&order=asc`,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          console.info(res.data);
          const result = res.data.data;
          setUsers(result);
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      axios
        .get(
          `${process.env.REACT_APP_ZWALLET_API}/users?limit=4&sort=first_name&order=asc`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        .then((res) => {
          console.info(res.data);
          const result = res.data.data;
          setUsers(result);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [querySearch]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchParams({ search: e.target.value }); // ini akan dioper ke search param di atas
    }
  };

  return (
    <Fragment>
      <section className="content-bar d-md-block big-screen col-lg-8 animation-pull-out">
        <p className="history-title mt-3 ms-4">Search Receiver</p>

        {/* <!-- search input for lg, xl, xxl--> */}
        <div className="search-receiver d-flex align-items-center bg-input m-3">
          <BsIcons.BsSearch className="icons-size text-grey ms-3" />
          <Input
            name="search"
            id="search"
            type="text"
            className="ms-3 p-2 text-grey bg-search-input search-receiver-input desktop"
            placeholder="Search receiver here"
            onKeyUp={handleSearch}
          />
        </div>

        {/* <!-- receiver list for lg, xl, xxl --> */}

        {users.map((user, index) => (
          <div
            key={user.id}
            onClick={() => navigate(`/apps/transfer/${user.id}`)}
            className="d-flex receivers p-1 mb-3 ms-3 me-3 "
          >
            <img
              className="receiver-picture user-pic mt-2 ms-4"
              src={user.picture ? user.picture : img}
              height="54px"
              alt="User"
            />
            <div className="receiver-detail mt-2 ms-3">
              <p className="text-title-name mb-0">
                {user.first_name} {user.last_name}
              </p>
              <p className="weekly mt-1">
                {user.phone ? `+62 ${user.phone}` : "+ Add phone number"}
              </p>
            </div>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default Receiver;
