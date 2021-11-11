import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./Orders.css";
import useAuth from "../../hooks/useAuth";
import Header from "../Shared/Header/Header";
const Orders = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [resorts, setResorts] = useState([]);
  //   const [singleData, setSingleData] = useState([]);
  const [matchedData, setMatchedData] = useState({});
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    axios
      .get("https://pure-inlet-82300.herokuapp.com/allProducts")
      .then((result) => {
        setResorts(result.data);
      });
  }, []);

  useEffect(() => {
    const matched = resorts.find((d) => d._id == id);
    setMatchedData(matched);
  }, [id, resorts]);

  console.log(user.email);
  const onSubmit = (data) => {
    data.email = user.email;
    data.status = "Pending";
    axios
      .post("https://pure-inlet-82300.herokuapp.com/addOrder", data)
      .then((result) => {
        if (result.data.insertedId) {
          alert("Successfully Booking Added");
          reset();
        }
      });
  };
  window.scroll(0, 0);
  return (
    <>
      {" "}
      <Header></Header>
      <Container>
        <Row className="w-100 py-5">
          <Col md={6} className=" ">
            <div className="booking-image-div">
              <img className="img-fluid" src={matchedData?.image} alt="" />
            </div>
            <div>
              <h3 className="text-danger my-3">{matchedData?.name}</h3>
              <div>
                <h4>
                  Price :{" "}
                  <span className="text-danger"> {matchedData?.cost}</span>{" "}
                </h4>
              </div>
              <p className="text-secondary booking-desc mt-3">
                {matchedData?.description}
              </p>
            </div>
          </Col>
          <Col md={6} className="border-start border-2 ">
            <div className="add-booking-container">
              <h2 className="text-center text-danger">
                {" "}
                Order Your Favourite One
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-3 form-wrapper"
              >
                <input
                  {...register("name", { required: true })}
                  // placeholder=" your name"
                  defaultValue={user?.displayName}
                  className="border-0 field"
                />

                <input
                  type="number"
                  {...register("email", { required: true })}
                  placeholder=" your phone number "
                  className="border-0 field"
                />
                <input
                  // type="date"
                  value={new Date().toLocaleDateString()}
                  className="border-0 field"
                  {...register("date", { required: true })}
                />

                <input
                  {...register("product", { required: true })}
                  // placeholder=" add resort name"
                  value={matchedData?.name}
                  className="border-0 field"
                />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  className="border-0 field"
                  type="submit"
                  value="Place Order"
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Orders;
