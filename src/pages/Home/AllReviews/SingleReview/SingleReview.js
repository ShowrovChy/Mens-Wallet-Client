import React from "react";
import { Col } from "react-bootstrap";
import Rating from "react-rating";

const SingleReview = (props) => {
  const { name, review, rating } = props.review;

  return (
    <Col
      lg={4}
      md={6}
      sx={12}
      key={review?._id}
      className="column-products px-3"
    >
      <div className="col-inside-wrapper p-2 ">
        <div className="review-desc-main-box mt-3 text-center">
          <div className="review-text-box text-wrap ">
            <p className="ps-2 text-secondary Text text-wrap">{review}</p>

            <h5 className=" ps-2">{name}</h5>
          </div>
          <div className=" review-desc-box d-flex mt-3 align-items-center justify-content-around">
            <span className=" ms-3 text-warning fw-bold fs-2">
              <h4>
                <Rating
                  readonly
                  emptySymbol="far fa-star icon-color"
                  fullSymbol="fas fa-star icon-color"
                  initialRating={rating}
                />
              </h4>
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleReview;
