import React, { useState } from "react";
import "./MakeAdmin.css";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://pure-inlet-82300.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          swal({
            title: "Excellent.!",
            text: "Admin Made Successfully",
            icon: "success",
            button: "OK",
          });
        }
      });
    reset();
  };
  return (
    <div className="admin-main-Container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <input
          className="border-0 field"
          name="email"
          placeholder="Email Address"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="border-0 field-btn"
          type="submit"
          value="make as Admin"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
