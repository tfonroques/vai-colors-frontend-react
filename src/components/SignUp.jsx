import React, { useState } from "react";
import Input from "./common/Input";
import * as Yup from "yup";
import { signUp } from "../services/UserService";
import auth from "../services/AuthService";

function SignUp({ history }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [errors, setErrors] = useState([]);

  const handler = async (e) => {
    e.preventDefault();
    const user = { username, email, password };
    try {
      const response = await signUp(user);
      auth.signInWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (err) {
      if (err.response && err.repsonse.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = err.response.data;
        setErrors(errors);
      }
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
          name="username"
          label="Username"
          value={username}
          handleChange={(v) => {
            setUsername(v.target.value);
          }}
          hint="Must be unique."
          type="text"
        />
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

export default SignUp;
