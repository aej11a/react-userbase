import React from "react";
import userbase from "userbase-js";
import { useForm } from "react-hook-form";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const RegistrationForm: React.FC = props => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = handleSubmit(({ email, password }) => {
    userbase.signUp({
      username: email,
      email: email,
      password: password
    });
  });

  return (
    <form onSubmit={onSubmit}>
      Email:{" "}
      <input
        name="email"
        ref={register({ required: true, pattern: emailRegex })}
      />
      {errors.email && <span>This field is required to be a valid email.</span>}
      <br />
      Password: <input name="password" ref={register({ required: true })} />
      {errors.password && <span>This field is required</span>}
      <br />
      <input type="submit" value="Register" />
    </form>
  );
};
