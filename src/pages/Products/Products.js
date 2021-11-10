import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { BsFillBookmarkFill } from "react-icons/bs";

import "./Products.css";
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
const Products = () => {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios.get("http://localhost:5000/allProducts").then((result) => {
      const data = result.data;
      setProducts(data);
    });
  }, []);
  console.log(products);
  return (
    <>
      <Header></Header>
      <div className="events-container mb-5">
        <Container className="w-100">
          <h1 className=" text-uppercase fw-bold ps-3">
            Explore <span className="text-warning">Resort</span> Hotels{" "}
          </h1>
          <h2 className="ps-3 text-secondary">
            Find the Resort hotel or campground that's just right for you.
          </h2>
          <Row className="g-5">
            {products.map((product) => (
              <Col md={6} sx={12} key={product?._id}>
                <div className=" overflow-hidden ser-image-div">
                  <img
                    className="rounded rounded-3 product-image"
                    src={product?.image}
                    alt=""
                  />
                </div>
                {product?.name}
                <div className="d-flex">
                  <Button className="book-btn-style border-0">
                    <Link
                      className="text-decoration-none text-white"
                      to={`/orders/${product._id}`}
                    >
                      {" "}
                      Buy Now
                      <span className="ms-2">
                        <BsFillBookmarkFill />
                      </span>{" "}
                    </Link>
                  </Button>
                  <div>
                    <span className=" ms-3 bg-light text-warning fw-bold fs-2">
                      {product.cost}
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Products;
