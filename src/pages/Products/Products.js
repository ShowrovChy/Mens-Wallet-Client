import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Spinner } from "react-bootstrap";
import "./Products.css";
import Header from "../Shared/Header/Header";
import Product from "../ManageAllOrders/Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://pure-inlet-82300.herokuapp.com/allProducts")
      .then((result) => {
        const data = result.data;
        setProducts(data);
      });
  }, []);
  if (products.length === 0) {
    return (
      <div className="text-center mt-5 p-5 fw-light">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }
  window.scroll(0, 0);
  return (
    <>
      <Header></Header>
      <div className="Products-container mb-5">
        <img
          className="products-banner"
          src={"https://i.ibb.co/PhM67Zn/0215214.jpg"}
          alt=""
        />
        <Container className="w-100 mt-5">
          <h1 className=" text-uppercase fw-bold ps-5 mb-5">
            <span className="text-danger">Explore</span> Men's Wallet{" "}
          </h1>

          <Row className="g-5 w-100 ps-5">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Products;
