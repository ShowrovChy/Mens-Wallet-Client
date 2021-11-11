import React from "react";
import "./MakeAdmin.css";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
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
