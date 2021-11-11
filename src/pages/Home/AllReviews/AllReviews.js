import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleReview from "./SingleReview/SingleReview";
import "./AllReviews.css";
const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://pure-inlet-82300.herokuapp.com/allReviews")
      .then((result) => {
        const data = result.data;
        setReviews(data);
      });
  }, []);
  return (
    <div className="allReviews-container">
      <Container className="w-100 reviews-wrapper ">
        <h1 className=" text-uppercase text-center fw-bold ps-3 mb-5">
          <span className="text-danger">Customers</span> Reviews{" "}
        </h1>

        <Row className="g-5 w-100 mx-auto mt-5">
          {reviews.map((review) => (
            <SingleReview review={review}></SingleReview>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllReviews;
