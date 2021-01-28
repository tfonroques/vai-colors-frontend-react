/* eslint-disable import/no-anonymous-default-export */
import http from "./HttpService";
import { apiEndPoint } from "../config.json";
import jwtDecode from "jwt-decode";

const tokenKey = "token";

http.setJwt(getJwt());

export async function signIn(user) {
  const { data: jwt } = await http.post(apiEndPoint + "/auth", {
    email: user.email,
    password: user.password,
  });
  localStorage.setItem(tokenKey, jwt);
}

export function signInWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function signOut() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  signIn,
  signOut,
  getCurrentUser,
  signInWithJwt,
  getJwt,
};
