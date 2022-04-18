import React from "react";

export const InputText = ({ placeholder, name, register, defaultValue }) => {
  return (
    <>
      <label htmlFor="" className="label">
        {placeholder}
      </label>
      <input
        placeholder={placeholder}
        name={name}
        type="text"
        defaultValue={defaultValue}
        {...register}
      />
    </>
  );
};
export const InputEmail = ({ placeholder, name, register, defaultValue }) => {
  return (
    <>
      <label htmlFor="" className="label">
        {placeholder}
      </label>
      <input
        placeholder={placeholder}
        name={name}
        type="email"
        defaultValue={defaultValue}
        {...register}
      />
    </>
  );
};
export const InputNumber = ({ placeholder, name, register, defaultValue }) => {
  return (
    <>
      <label htmlFor="" className="label">
        {placeholder}
      </label>
      <input
        placeholder={placeholder}
        name={name}
        type="number"
        defaultValue={defaultValue}
        {...register}
      />
    </>
  );
};
