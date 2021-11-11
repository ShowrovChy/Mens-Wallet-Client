import React from "react";
import axios from "axios";
import "./AddANewProduct.css";
import { useForm } from "react-hook-form";
const AddANewProduct = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://pure-inlet-82300.herokuapp.com/addProducts", data)
      .then((result) => {
        if (result.data.insertedId) {
          alert("Successfully Event Added");
          reset();
        }
      });
  };
  window.scroll(0, 0);
  return (
    <div className="add-resort-container">
      <h1 className="text-center text-danger">Add the latest Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          placeholder=" Product Name"
          className="border-0 field"
        />

        <input
          {...register("cost", { required: true })}
          placeholder=" Product Price "
          className="border-0 field"
        />

        <textarea
          className="mt-3 border-0 field"
          {...register("description", { required: true })}
          placeholder="About Product"
        />
        <input
          {...register("image", { required: true })}
          placeholder="Product image"
          className="border-0 field"
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" value="Add Product" className="border-0 field" />
      </form>
    </div>
  );
};

export default AddANewProduct;
