import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/allReviews").then((result) => {
      const data = result.data;
      setReviews(data);
    });
  }, []);
  return (
    <div className="homeProducts-container">
      <Container className="w-100 mt-5">
        <h1 className=" text-uppercase text-center fw-bold ps-3 mb-5">
          <span className="text-danger">Customers</span> Reviews{" "}
        </h1>

        <Row className="g-5">
          {reviews.map((review) => (
            <Col
              lg={4}
              md={6}
              sx={12}
              key={review?._id}
              className="column-products px-3"
            >
              <div className="col-inside-wrapper ">
                <div className="review-desc-main-box mt-3 text-center">
                  <div className="review-text-box">
                    <p className="ps-2 text-secondary">{review?.review}</p>
                    <h5 className=" ps-2">{review?.name}</h5>
                  </div>
                  <div className=" review-desc-box d-flex mt-3 align-items-center justify-content-around">
                    <span className=" ms-3 text-warning fw-bold fs-2">
                      <h4>
                        <Rating
                          readonly
                          emptySymbol="far fa-star icon-color"
                          fullSymbol="fas fa-star icon-color"
                          initialRating={review?.rating}
                        />
                      </h4>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllReviews;
