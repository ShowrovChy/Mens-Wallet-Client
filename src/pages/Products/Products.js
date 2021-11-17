import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Spinner } from "react-bootstrap";
import "./Products.css";
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
// ......
AOS.init();
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
              <Col
                lg={4}
                md={6}
                sx={12}
                data-aos="zoom-in-up"
                data-aos-duration="1200"
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
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Products;
