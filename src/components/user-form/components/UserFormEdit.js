import React from "react";
import { InputEmail, InputNumber, InputText } from "../../../shared/Input";
import { useForm } from "react-hook-form";
import { useSubscription } from "@cobuildlab/react-simple-state";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { onUpdateForm, onUpdateFormError } from "../form-event";
import { updateForm } from "../form-actions";

import "../../components.scss";

const UserFormEdit = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const history = useHistory();
  useSubscription(onUpdateForm, (state) => {
    toast.success(state, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    history.push({
      pathname: "/",
    });
  });
  useSubscription(onUpdateFormError, (error) => {
    toast.error(error, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  });

  const onSubmit = (data) => {
    reset();
    data["id"] = location.state.id;
    updateForm(data);
  };

  return (
    <div className="centered">
      <header className="page-title">
        <h1>Edit User {location.state.firstName}</h1>
      </header>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            register={{
              ...register("firstName", { required: "The user need a name!" }),
            }}
            defaultValue={location.state.firstName}
            placeholder="Name"
            name="firstName"
          />
          <div className="errorText">
            {errors?.firstName && <span>{errors.firstName.message}</span>}
          </div>
          <InputEmail
            register={{
              ...register("email", { required: "The user need a valid email" }),
            }}
            defaultValue={location.state.email}
            placeholder="Email"
            name="email"
          />
          <div className="errorText">
            {errors?.email && <span>{errors.email.message}</span>}
          </div>
          <InputNumber
            register={{
              ...register("phone", {
                required: "The user need a phone number",
              }),
            }}
            defaultValue={location.state.phone}
            placeholder="Number Phone"
            name="phone"
          />
          <div className="errorText">
            {errors?.phone && <span>{errors.phone.message}</span>}
          </div>
          <InputText
            register={{
              ...register("country", { required: "The user need a country!" }),
            }}
            defaultValue={location.state.country}
            placeholder="Country"
            name="country"
          />
          <div className="errorText">
            {errors?.country && <span>{errors.country.message}</span>}
          </div>
          <button type="submit" onClick={handleSubmit}>
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserFormEdit;
