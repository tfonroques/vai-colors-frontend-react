import http from "./HttpService";
import { apiEndPoint } from "../config.json";

export function signUp(user) {
  return http.post(apiEndPoint + "/users/signup", {
    username: user.username,
    email: user.email,
    password: user.password,
  });
}

export function signIn(user) {
  return http.post(apiEndPoint + "/auth", {
    email: user.email,
    password: user.password,
  });
}
