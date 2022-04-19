import React from "react";

export type InputProps = {
  placeholder?: string;
  name?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: React.FC<InputProps> = ({ value, onChange, placeholder, name, defaultValue }) => {
  return (
    <>
      <label htmlFor="" className="label">
        {placeholder}
      </label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        type="text"
        defaultValue={defaultValue}
      />
    </>
  );
};
export const InputEmail: React.FC<InputProps> = ({ value, onChange, placeholder, name, defaultValue }) => {
  return (
    <>
      <label htmlFor="" className="label">
        {placeholder}
      </label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        type="email"
        defaultValue={defaultValue}
      />
    </>
  );
};
export const InputNumber: React.FC<InputProps> = ({ value, onChange, placeholder, name, defaultValue }) => {
  return (
    <>
      <label htmlFor="" className="label">
        {placeholder}
      </label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        type="number"
        defaultValue={defaultValue}
      />
    </>
  );
};
