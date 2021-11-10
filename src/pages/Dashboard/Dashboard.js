import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import AddANewProduct from "../AddANewProduct/AddANewProduct";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import "./Dashboard.css";
import { RiAddCircleLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import {
  MdManageSearch,
  MdOutlinePayment,
  MdOutlineRateReview,
} from "react-icons/md";
import { AiFillWallet, AiOutlineShoppingCart } from "react-icons/ai";
import ManageProducts from "../ManageProducts/ManageProducts";
import Header from "../Shared/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import useAuth from "../../hooks/useAuth";
import Review from "../Review/Review";
import Payment from "../Payment/Payment";
const Dashboard = () => {
  const [isActive, setIsActive] = useState("addProduct");
  const { user, handleUserLogOut } = useAuth();
  let { path, url } = useRouteMatch();
  window.scroll(0, 0);
  return (
    <>
      <Header></Header>

      <Row className="w-100 mt-5">
        <Col md={3} className="  ps-5 border-end border-2">
          <h2 className="text-danger">Dashboard</h2>
          <hr className="py-0 my-0" />
          <ul className="admin-ul ps-0">
            <li>
              <h5 className="d-flex align-items-center">
                <span className="fs-3">
                  <AiOutlineShoppingCart />{" "}
                </span>{" "}
                <Link
                  exact
                  to={`${url}`}
                  className="pt-2 ms-1 text-decoration-none linkColor"
                >
                  My Orders
                </Link>
              </h5>
            </li>
            <li>
              <h5 className="d-flex align-items-center">
                <span className="fs-3">
                  <MdOutlinePayment />{" "}
                </span>{" "}
                <Link
                  to={`${url}/payment`}
                  className="pt-2 ms-1 text-decoration-none linkColor"
                >
                  Pay
                </Link>
              </h5>
            </li>
            <li>
              <h5 className="d-flex align-items-center">
                <span className="fs-3">
                  <MdOutlineRateReview />{" "}
                </span>{" "}
                <Link
                  to={`${url}/review`}
                  className="pt-2 ms-1 text-decoration-none linkColor"
                >
                  Review
                </Link>
              </h5>
            </li>
            <li>
              <h5 className="d-flex align-items-center">
                <span className="fs-3">
                  <MdManageSearch />{" "}
                </span>{" "}
                <Link
                  to={`${url}/allProducts`}
                  className="pt-2 ms-1 text-decoration-none linkColor"
                >
                  Manage Products
                </Link>
              </h5>
            </li>
            <li>
              <h5 className="d-flex align-items-center">
                <span className="fs-3">
                  <AiOutlineShoppingCart />{" "}
                </span>{" "}
                <Link
                  to={`${url}/manageAllOrders`}
                  className="pt-2 ms-1 text-decoration-none linkColor"
                >
                  Manage All Orders
                </Link>
              </h5>
            </li>
            <li>
              <h5 className="d-flex align-items-center">
                <span className="fs-3">
                  <AiOutlineShoppingCart />{" "}
                </span>{" "}
                <Link
                  to={`${url}/makeAdmin`}
                  className="pt-2 ms-1 text-decoration-none linkColor"
                >
                  Make Admin
                </Link>
              </h5>
            </li>
            <li>
              <h5 className="d-flex align-items-center">
                <span className="fs-3">
                  <RiAddCircleLine />{" "}
                </span>{" "}
                <Link
                  to={`${url}/addANewProduct`}
                  className="pt-2 ms-1 text-decoration-none linkColor"
                >
                  Add New Product
                </Link>
              </h5>
            </li>
            <li>
              <h5>
                <span className="fs-3">
                  <FiLogOut />{" "}
                </span>{" "}
                <span>
                  {user.email && <span onClick={handleUserLogOut}>Logout</span>}
                </span>
              </h5>
            </li>
          </ul>
        </Col>
        <Col md={9} className="">
          <Switch>
            <Route exact path={path}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <Route path={`${path}/review`}>
              <Review></Review>
            </Route>
            <Route path={`${path}/allProducts`}>
              <ManageProducts></ManageProducts>
            </Route>
            <Route path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path={`${path}/addANewProduct`}>
              <AddANewProduct></AddANewProduct>
            </Route>
          </Switch>
        </Col>
      </Row>
      {/*  <Row className="w-100 mt-5">
        <Col md={3} className="  ps-5 border-end border-2">
          <ul className="admin-ul ps-0">
            <li>
              <h4 className="mt-2 text-warning border-bottom border-2 border-dark ">
                Admin DashBoard
              </h4>
            </li>
            <li onClick={() => setIsActive("manageOrder")}>
              <h5 className="d-flex align-items-center">
                <span className="fs-3">
                  <MdOutlinePayment />{" "}
                </span>{" "}
                <span className="pt-2 ms-1">Pay</span>
              </h5>
            </li>
            <li onClick={() => setIsActive("manageOrder")}>
              <h5 className="d-flex align-items-center">
                <span className="fs-3">
                  <AiOutlineShoppingCart />{" "}
                </span>{" "}
                <span className="pt-2 ms-1">All Orders</span>
              </h5>
            </li>
            <li onClick={() => setIsActive("manageOrder")}>
              <h5 className="d-flex align-items-center">
                <span className="fs-3">
                  <MdManageSearch />{" "}
                </span>{" "}
                <span className="pt-2 ms-1">Manage All Orders</span>
              </h5>
            </li>
            <li onClick={() => setIsActive("addProduct")}>
              {" "}
              <h5 className="d-flex align-items-center">
                {" "}
                <span className="fs-3">
                  <RiAddCircleLine />{" "}
                </span>{" "}
                <span className="pt-2 ms-1">Add New Product</span>
              </h5>
            </li>
            <li onClick={() => setIsActive("allProducts")}>
              {" "}
              <h5 className="d-flex align-items-center">
                {" "}
                <span className="fs-3">
                  <AiFillWallet />{" "}
                </span>{" "}
                <span className="pt-2 ms-2">All Products</span>
              </h5>
            </li>
          </ul>
        </Col>
        <Col md={9} className="">
          {isActive === "addProduct" && <AddANewProduct />}
          {isActive === "manageOrder" && <ManageAllOrders />}
          {isActive === "allProducts" && <AllProducts />}
        </Col>
      </Row> */}
    </>
  );
};

export default Dashboard;
