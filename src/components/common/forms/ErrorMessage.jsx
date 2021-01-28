import React from "react";

function ErrorMessage({ error }) {
  if (!error) return null;
  return <small className="text-danger"> {error} </small>;
}

export default ErrorMessage;
