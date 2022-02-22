import React, { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";
import img from "../../../assets/img/blank-profile-picture.png";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";

const Transfer = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [form, setForm] = useState({
    amountTransfer: "",
    notes: ""
  });
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams(); // ini akan menangkap params dari url bar browser
  const [userReceiver, setUserReceiver] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    picture: ""
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ZWALLET_API}/users/details/${id}`, {
        //id ini ditangkap dari tab url browser
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        const result = res.data.data;
        console.log(result);
        setUserReceiver(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigate = useNavigate();
  const toConfirmPage = () => {
    navigate(`/apps/confirmation/${userReceiver.id}`);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_ZWALLET_API}/transaction/transfer`,
        {
          receiverName: `${userReceiver.first_name} ${userReceiver.last_name}`,
          receiverPhone: userReceiver.phone,
          amountTransfer: form.amountTransfer,
          notes: form.notes
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setLoading(false);
        const result = res.data.data;
        console.log(result);
        toConfirmPage();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
  };
  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out">
        <p className="history-title mt-3 ms-4">Transfer Money</p>

        {/* <!-- receiver lg, xl, xxl --> */}
        <div className="d-flex receivers  mb-3 mt-3 ms-4 me-4 ">
          <img
            className="receiver-picture user-pic mt-2 ms-4"
            src={userReceiver.picture ? userReceiver.picture : img}
            height="54px"
            alt="Samuel"
          />
          <div className="receiver-detail ms-3 mt-2">
            <p className="text-title-name mb-0">
              {userReceiver.first_name} {userReceiver.last_name}
            </p>
            <p className="weekly mt-1">
              {userReceiver.phone
                ? `+62 ${userReceiver.phone}`
                : "+ Add phone number"}
            </p>
          </div>
        </div>

        <p className="transfer-instruction ms-4 mt-3">
          Type the amount you want to transfer and then <br></br> press continue
          to the next steps.
        </p>

        <form onSubmit={handleSubmit}>
          {/* <!-- input amount money for lg, xl, xxl --> */}
          <div className="input-amount-money mb-2 mt-3">
            <Input
              name="amountTransfer"
              value={form.amountTransfer}
              onChange={handleChange}
              className=" input-amount text-center bg-transparent"
              placeholder="0.00"
              type="number"
            />
          </div>

          <p className="text-title-name text-center">
            Rp {user.balance} Available
          </p>

          <div className="input-notes notes-position d-flex mt-4 w-50 ">
            <BsIcons.BsPen className="pen text-grey position-absolute ms-1" />
            <Input
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="ps-5 p-1 w-100 bg-transparent"
              placeholder="Add some notes"
              type="text"
              id="notes"
            />
          </div>

          {/* <!-- button continue for lg, xl, xxl --> */}
          <div className="btn-continue-desktop d-flex justify-content-end ms-5 me-5">
            <Button
              isLoading={loading}
              className="button text-white w-25 p-2 shadow"
            >
              Continue
            </Button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default Transfer;
