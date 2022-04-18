import React from "react";
import { InputEmail, InputNumber, InputText } from "../../../shared/Input";
import { useForm } from "react-hook-form";
import { useSubscription } from "@cobuildlab/react-simple-state";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { onSendForm, onSendFormError } from "../form-event";
import { sendForm } from "../form-actions";

import "../../components.scss";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  useSubscription(onSendForm, (state) => {
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
  useSubscription(onSendFormError, (error) => {
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
    sendForm(data);
  };

  return (
    <div className="centered">
      <header className="page-title">
        <h1>Add new User</h1>
      </header>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            register={{
              ...register("firstName", { required: "The user need a name!" }),
            }}
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
            placeholder="Country"
            name="country"
          />
          <div className="errorText">
            {errors?.country && <span>{errors.country.message}</span>}
          </div>
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
