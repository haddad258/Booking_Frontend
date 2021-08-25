import React, { Fragment } from "react";

import { useForm } from "react-hook-form";
export default function TabsExamples() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <br />
        <input name="name" ref={register({ required: true })} />
        <br />
        <br />
        <div style={{ color: "red" }}>{errors.name && "name is required"}</div>

        <label>Lastname</label>
        <br />
        <input
          ref={register({ required: true })}
          type="text"
          name="lastname"
          id=""
        />
        <div style={{ color: "red" }}>
          {errors.lastname && "Last name is required"}
        </div>
        <br />

        <br />
        <br />
        <input type="submit" />
      </form>
    </Fragment>
  );
}
