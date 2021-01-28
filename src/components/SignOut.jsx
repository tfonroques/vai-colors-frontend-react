// eslint-disable-next-line
import React, { useEffect } from "react";
import auth from "../services/AuthService";

function SignOut() {
  useEffect(() => {
    auth.signOut();
    window.location = "/";
  }, []);
  return null;
}

export default SignOut;
