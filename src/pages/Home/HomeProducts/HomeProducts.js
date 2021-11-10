import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/allProducts").then((result) => {
      const data = result.data;
      setProducts(data.slice(0, 6));
    });
  }, []);
  return (
    <Container style={{ margin: "90px auto" }}>
      <Row>
        {products.map((product) => (
          <Col md={6} sx={12} key={product?._id}>
            <div className=" overflow-hidden ser-image-div">
              <img
                className="rounded rounded-3 product-image"
                src={product?.image}
                alt=""
              />
            </div>
            <h4 className="text-danger text-center">{product?.name}</h4>
            <h3>{product?.cost}</h3>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeProducts;
