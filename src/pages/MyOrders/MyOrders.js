import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Table, Button, Container } from "react-bootstrap";
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://pure-inlet-82300.herokuapp.com/myOrders/${user?.email}`)
      .then((result) => setOrders(result?.data));
  }, [user.email, isLoading]);

  // Handle Order Remove
  const handleRemove = (id) => {
    setIsLoading(false);
    const proceed = window.confirm("Do you want to delete this product?");

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
  //---
  window.scroll(0, 0);
  return (
    <>
      {" "}
      <Container style={{ minHeight: "80vh" }}>
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
            {orders.map((BR, index) => (
              <tr key={BR._id}>
                <td>{index + 1} </td>
                <td>{BR?.name}</td>
                <td>{BR?.email}</td>
                <td>{BR?.date}</td>
                <td className="text-warning fw-bold">{BR?.status}</td>
                <td>
                  <Button variant="danger" onClick={() => handleRemove(BR._id)}>
                    {" "}
                    Remove{" "}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default MyOrders;
