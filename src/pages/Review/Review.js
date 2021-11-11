import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./Review.css";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
const Review = () => {
  const { user } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://pure-inlet-82300.herokuapp.com/addReview", data)
      .then((result) => {
        if (result.data.insertedId) {
          swal({
            title: "Thank You",
            text: "Successfully Review Added",
            icon: "success",
            button: "OK",
          });
          reset();
        }
      });
  };
  window.scroll(0, 0);
  return (
    <div>
      <div className="add-product-container">
        <h1 className="text-center text-danger">Please Share Your Feedback</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-1 form-wrapper">
          <input
            {...register("name", { required: true })}
            defaultValue={user?.displayName}
            className="border-0 field"
          />

          <input
            type="email"
            {...register("email", { required: true })}
            value={user?.email}
            className="border-0 field"
          />

          <textarea
            wrap="soft"
            className="mt-3 border-0 field"
            {...register("review", { required: true })}
            placeholder="Feedback"
          />
          <input
            type="number"
            step="0.1"
            {...register("rating", {
              required: true,
              min: 0,
              max: 5,
            })}
            placeholder="Rate Us  (0 - 5)"
            className="border-0 field"
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" value="Add Product" className="border-0 field" />
        </form>
      </div>
    </div>
  );
};

export default Review;
