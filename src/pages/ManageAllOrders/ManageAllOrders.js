import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
const ManageAllOrders = () => {
  const [orderedProduct, setOrderedProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://pure-inlet-82300.herokuapp.com/manageAllOrders")
      .then((result) => {
        setOrderedProduct(result.data);
      });
  }, [isLoading]);

  // Handle order Remove
  const handleRemove = (id) => {
    setIsLoading(false);
    const proceed = window.confirm("Do you want to delete this Order?");
    if (proceed) {
      axios
        .delete(`https://pure-inlet-82300.herokuapp.com/deleteOrder/${id}`)
        .then((result) => {
          if (result.data.deletedCount) {
            setIsLoading(!false);
          }
        });
    }
  };
  // Handle Order Remove
  const handleApprove = (id) => {
    setIsLoading(false);
    const proceed = window.confirm("Do you want to approve this oder?");
    if (proceed) {
      axios
        .put(`https://pure-inlet-82300.herokuapp.com/approveOrder/${id}`)
        .then((result) => {
          if (result.data.modifiedCount) {
            setIsLoading(!false);
          }
        });
    }
  };
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Status</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {orderedProduct.map((BR, index) => (
            <tr key={BR._id}>
              <td>{index + 1} </td>
              <td>{BR?.name}</td>
              <td>{BR?.email}</td>
              <td>{BR?.date}</td>
              <td>
                <Button
                  variant="success"
                  className="text-white"
                  onClick={() => handleApprove(BR._id)}
                >
                  {BR?.status}
                </Button>
              </td>
              <td>
                <span
                  onClick={() => handleRemove(BR._id)}
                  className="fs-3 ps-3 text-danger "
                >
                  {" "}
                  <MdDelete />{" "}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllOrders;
