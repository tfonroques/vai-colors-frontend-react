import React from "react";
import { useFormikContext } from "formik";

function SubmitButton({ className }) {
  const { handleSubmit } = useFormikContext();

  return (
    <button type="submit" className={className} onClick={handleSubmit}>
      submit
    </button>
  );
}

export default SubmitButton;
