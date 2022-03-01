/* eslint-disable array-callback-return */
// import axios from "axios";
import React, { Fragment, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Input from "../../../components/base/Input";
import img from "../../../assets/img/blank-profile-picture.png";

// redux
import { useDispatch, useSelector } from "react-redux";
import { GetReceivers } from "../../../redux/actions/apps/getReceivers";
import { SearchReceiver } from "../../../redux/actions/apps/searchReceiver";
import { GetProfile } from "../../../redux/actions/apps/getProfile";

const Receiver = () => {
  const dispatch = useDispatch();
  const getReceivers = useSelector((state) => state.GetReceivers);
  const searchReceiver = useSelector((state) => state.SearchReceiver);
  const profileData = useSelector((state) => state.GetProfile);
  const profile = profileData.data;

  const [searchParams, setSearchParams] = useSearchParams(); // ini untuk mengatur query param
  const querySearch = searchParams.get("search"); // ini menangkap dari setSearchParam di bawah, msk ke var
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetProfile());

    if (querySearch) {
      dispatch(SearchReceiver(querySearch));
    } else {
      dispatch(GetReceivers());
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

        {querySearch
          ? searchReceiver.data.map((receiver, index) => (
              <div
                key={receiver.id}
                onClick={() => navigate(`/apps/transfer/${receiver.id}`)}
                className="d-flex receivers p-1 mb-3 ms-3 me-3 "
              >
                <img
                  className="receiver-picture user-pic mt-2 ms-4"
                  src={receiver.picture ? receiver.picture : img}
                  height="54px"
                  alt="User"
                />
                <div className="receiver-detail mt-2 ms-3">
                  <p className="text-title-name mb-0">
                    {receiver.first_name} {receiver.last_name}
                  </p>
                  <p className="weekly mt-1">
                    {receiver.phone
                      ? `+62 ${receiver.phone}`
                      : "+ Add phone number"}
                  </p>
                </div>
              </div>
            ))
          : getReceivers.data.map((receiver, index) => {
              if (receiver.id !== profile.id) {
                return (
                  <div
                    key={receiver.id}
                    onClick={() => navigate(`/apps/transfer/${receiver.id}`)}
                    className="d-flex receivers p-1 mb-3 ms-3 me-3 "
                  >
                    <img
                      className="receiver-picture user-pic mt-2 ms-4"
                      src={receiver.picture ? receiver.picture : img}
                      height="54px"
                      alt="User"
                    />
                    <div className="receiver-detail mt-2 ms-3">
                      <p className="text-title-name mb-0">
                        {receiver.first_name} {receiver.last_name}
                      </p>
                      <p className="weekly mt-1">
                        {receiver.phone
                          ? `+62 ${receiver.phone}`
                          : "+ Add phone number"}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
      </section>
    </Fragment>
  );
};

export default Receiver;
