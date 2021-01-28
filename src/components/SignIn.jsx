import React, { useState } from "react";
import Input from "./common/Input";
import * as Yup from "yup";
import auth from "../services/AuthService";

function SignIn({ name, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  console.log(errors);

  const handler = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      await auth.signIn(user);
      window.location = "/";
    } catch (err) {
      const error = err.response.data;
      setErrors(error);
      console.log(error);
    }
  };

  // eslint-disable-next-line
  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum"),
  });
  return (
    <div>
      <form onSubmit={handler}>
        <Input
          name="email"
          label="Email adress"
          value={email}
          handleChange={(v) => {
            setEmail(v.target.value);
          }}
          hint="We'll never share your email with anyone else."
          type="email"
        />

        <Input
          name="password"
          label="Password"
          value={password}
          handleChange={(v) => {
            setPassword(v.target.value);
          }}
          type="password"
        />
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignIn;
