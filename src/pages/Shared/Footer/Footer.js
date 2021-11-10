import React from "react";
import "./Footer.css";
import { Button, Col, Row } from "react-bootstrap";
import { FaHotel } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgFacebook, CgInstagram, CgTwitter, CgYoutube } from "react-icons/cg";
// import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="pt-5  mt-5">
      <Row xs={1} md={2} lg={4} className="upperFooterDiv px-5 ">
        <Col className="mt-3">
          <div>
            <h2 className="text-warning">
              <span>
                {" "}
                <FaHotel />{" "}
              </span>{" "}
              Marriott{" "}
            </h2>
          </div>
          <p className=" mt-4 footer-desc">
            The Walt Disney World Resort, also called Walt Disney World or
            Disney World, is an entertainment resort complex in Bay Lake and
            Lake Buena Vista, Florida, United States, near the cities of Orlando
            and Kissimmee. Opened on October 1, 1971, the resort is owned and
            operated by Disney Parks.
          </p>
        </Col>
        <Col className="mt-4">
          <h4 className="text-warning mb-4">Services</h4>
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
        <Col className="mt-4">
          <h4 className="text-warning">Quick Links</h4>
          <ul className="footer-list ul-p">
            <li>Tour guides</li>
            <li>Online Booking</li>
            <li>Blogs</li>
            <li>
              <Link to="/contact" className="footerLink">
                Contact{" "}
              </Link>{" "}
            </li>
          </ul>
        </Col>
        <Col className="mt-4">
          <h4 className="text-warning">Contact Us</h4>
          <ul className="footer-list ul-p">
            <li>+1 1634 53 759</li>
            <li>+5 1554 56 858</li>
            <li>info@marriott.com</li>
            <li>hello@marriott.com</li>
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
          <small>Copyright @2021. All Rights Reserved By Marriott</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
