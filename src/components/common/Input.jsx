import React from "react";

function Input({
  name,
  label,
  value,
  handleChange,
  hint,
  error,
  ...otherProps
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={handleChange}
        className="form-control"
        id={name}
        aria-describedby={`${name}Help`}
        autoComplete="off"
        {...otherProps}
      />
      {error && <div className="alert alert-danger">{error}</div>}
      <small id={`${name}Help`} className="form-text text-muted">
        {hint}
      </small>
    </div>
  );
}

export default Input;
