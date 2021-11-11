import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleReview from "./SingleReview/SingleReview";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://pure-inlet-82300.herokuapp.com/allReviews")
      .then((result) => {
        const data = result.data;
        setReviews(data);
        console.log(reviews);
      });
  }, []);
  return (
    <div className="allReviews-container">
      <Container className="w-100 mt-5">
        <h1 className=" text-uppercase text-center fw-bold ps-3 mb-5">
          <span className="text-danger">Customers</span> Reviews{" "}
        </h1>

        <Row className="g-5 w-100 mx-auto">
          {reviews.map((review) => (
            <SingleReview review={review}></SingleReview>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllReviews;
