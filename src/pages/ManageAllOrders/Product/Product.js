import React from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// ......
const Product = ({ product }) => {
  return (
    <Col
      lg={4}
      md={6}
      sx={12}
      key={product?._id}
      className="column-products px-3"
    >
      <div className="col-inside-wrapper ">
        <div className=" overflow-hidden ser-image-div">
          <img
            className="rounded rounded-3 product-image"
            src={product?.image}
            alt=""
          />
        </div>
        <div className="desc-main-box mt-3">
          <h5 className="text-box ps-2">{product?.name}</h5>
          <div className=" desc-box d-flex mt-3 align-items-center justify-content-around">
            <Button className="order-btn-style border-0">
              <Link
                className="text-decoration-none text-white"
                to={`/orders/${product._id}`}
              >
                Buy Now
              </Link>
            </Button>
            <div>
              <span className=" ms-3 text-danger fw-bold fs-2">
                {product.cost}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Product;
