import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";


const CouponApplyForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
      >
      <Field
        name="coupon"
        type="text"
        label="Have coupon?"
     
        placeholder="Coupon code"
       
      />
      <button
        type="submit"
        className="btn btn-sm btn-primary mt-3 float-right"
        disabled={submitting}
      >
        Apply
      </button>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "couponapplyform",
  })
)(CouponApplyForm);