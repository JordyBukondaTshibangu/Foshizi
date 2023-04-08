import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FormInput, FormInputGroup, FormLabel } from "./InputElement";

const Input = ({
  label,
  type,
  minLength,
  required,
  onChange,
  value,
  errorMessage,
}) => {
  return (
    <FormInputGroup>
      <FormLabel>{label}</FormLabel>
      <FormInput
        value={value}
        type={type}
        minLength={minLength}
        required={required ? true : false}
        errorMessage={errorMessage}
        onChange={onChange}
      />
    </FormInputGroup>
  );
};

export default Input;
