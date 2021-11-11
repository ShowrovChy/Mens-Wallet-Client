import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

const ManageProducts = () => {
  const [orderedProduct, setOrderedProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://pure-inlet-82300.herokuapp.com/allProducts")
      .then((result) => {
        setOrderedProduct(result.data);
      });
  }, [isLoading]);

  // Handle Oder Remove
  const handleRemove = (id) => {
    setIsLoading(false);
    const proceed = window.confirm("Do you want to delete this product?");
    if (proceed) {
      axios
        .delete(`https://pure-inlet-82300.herokuapp.com/deleteProduct/${id}`)
        .then((result) => {
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
          {orderedProduct.map((BR, index) => (
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
