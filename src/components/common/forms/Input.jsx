import React from "react";
import { useFormikContext, Field } from "formik";
import ErrorMessage from "./ErrorMessage";
import "../../../styles/Input.css";

function Input({
  name,
  label,
  className = "d-flex flex-column",
  ...otherProps
}) {
  const { setFieldTouched, touched, errors } = useFormikContext();
  return (
    <div className={className}>
      <label htmlFor={name} className="ml-2">
        {label}
      </label>
      <Field
        className="form-control"
        name={name}
        id={name}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      {touched[name] && <ErrorMessage error={errors[name]} />}
    </div>
  );
}

export default Input;
