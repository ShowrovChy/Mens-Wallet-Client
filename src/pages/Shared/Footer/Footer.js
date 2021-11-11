import React from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgFacebook, CgInstagram, CgTwitter, CgYoutube } from "react-icons/cg";
import { GrGoogleWallet } from "react-icons/gr";
const Footer = () => {
  return (
    <div className="pt-5  mt-5">
      <Row xs={1} md={3} className="upperFooterDiv px-5 ">
        <Col className="mt-3">
          <div>
            <h2 className=" logo-color fw-bold">
              <span className="fs-1 me-1">
                {" "}
                <GrGoogleWallet />
              </span>
              allet
            </h2>
          </div>
          <p className=" mt-4 footer-desc ">
            The Men's Wallet Company is wellknown to worldwide ,We Care Our
            Product and Quality , We Focus on Our customer satisfaction and
            their experience.We always provide the best Product to consumers.Our
            honesty make us number one Website selling men's wallet.
          </p>
        </Col>
        <Col className="mt-4 ps-5">
          <h4 className="text-danger mb-4">Services</h4>
          <ul className="footer-list ul-p">
            <li>Support</li>
            <li>
              <Link to="/about" className="footerLink">
                About
              </Link>
            </li>

            <li>Blogs</li>
            <li>Privacy Policy</li>
          </ul>
        </Col>

        <Col className="mt-4 ps-5">
          <h4 className="text-danger">Contact Us</h4>
          <ul className="footer-list ul-p">
            <li>+5 1554 56 858</li>
            <li>info@menswallet.com</li>
            <li>hello@menswallet.com</li>
            <li>Br1. 26/B Street, New York, USA</li>
          </ul>
        </Col>
      </Row>
      <div className="text-center my-5">
        <div className="d-inline-block">
          {" "}
          <div className="d-flex">
            <div className="iconDiv">
              <h2 className="footerIcon">
                <CgFacebook />
              </h2>
            </div>
            <div className="iconDiv">
              <h2 className="footerIcon">
                <CgTwitter />
              </h2>
            </div>
            <div className="iconDiv">
              <h2 className="footerIcon">
                <CgYoutube />
              </h2>
            </div>
            <div className="iconDiv">
              <h2 className="footerIcon">
                <CgInstagram />
              </h2>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="lowerFooterDiv mt-4">
        <p className="text-center text-white">
          <small>Copyright @2021. All Rights Reserved By Men's Wallet</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
