import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

const ManageProducts = () => {
  const [bookedResort, setBookedResort] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://pure-inlet-82300.herokuapp.com/allProducts")
      .then((result) => {
        console.log(result.data);
        setBookedResort(result.data);
      });
  }, [isLoading]);

  // Handle Booking Remove
  const handleRemove = (id) => {
    setIsLoading(false);
    const proceed = window.confirm("Do you want to delete this product?");
    if (proceed) {
      axios
        .delete(`https://pure-inlet-82300.herokuapp.com/deleteProduct/${id}`)
        .then((result) => {
          console.log(result);
          if (result.data.deletedCount) {
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
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {bookedResort.map((BR, index) => (
            <tr key={BR._id}>
              <td>{index + 1} </td>
              <td>{BR?.name}</td>
              <td>
                <span
                  className="fs-3 text-danger ps-3"
                  onClick={() => handleRemove(BR._id)}
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

export default ManageProducts;
