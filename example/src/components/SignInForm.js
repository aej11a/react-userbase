import React, { useEffect } from "react";
import { useUserbase } from "../hooks/useUserbase";
import { useForm } from "react-hook-form";
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const SignInForm = props => {
  const [signIn, { response, loading, error }] = useUserbase("signIn");
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = handleSubmit(data => {
    signIn({ username: data.email, password: data.password });
  });

  useEffect(() => {
    console.log(response, loading, error);
  }, [response, loading, error]);

  useEffect(() => {
    console.log("the function updated!");
  }, [signIn]);

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
      <input type="submit" value="Sign in with hook" />
    </form>
  );
};
