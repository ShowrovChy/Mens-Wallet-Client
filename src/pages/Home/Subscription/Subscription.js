import React from "react";
import { Col, Row, Button, InputGroup, FormControl } from "react-bootstrap";
import "./Subscription.css";
const Subscription = () => {
  return (
    <div className="subscription-container d-flex justify-content-center align-items-center">
      <div className="text-center w-75">
        <h5 className="top-sub-text">JOIN OUR MAILING LIST</h5>
        <h1 className="news-text">Newsletter Sign Up</h1>
        <p className="text-danger">Sign Up For News And Special Offers</p>

        <InputGroup className="mb-3 input-group ">
          <FormControl
            placeholder="Add Your Email Address"
            aria-label="Add Your Email Address"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-danger" id="button-addon2">
            Subscribe
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Subscription;
