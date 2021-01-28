import React from "react";

const Checkbox = ({ title }) => {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck1" />
      <label className="form-check-label" htmlFor="gridCheck1">
        {title}
      </label>
      <div class="invalid-feedback">You must agree before submitting.</div>
    </div>
  );
};

export default Checkbox;
