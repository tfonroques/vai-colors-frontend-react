/* eslint-disable import/no-anonymous-default-export */
import http from "./HttpService";
import { apiEndPoint } from "../config.json";

export function createPainting({
  title,
  author,
  description,
  original,
  thumbnail,
  date,
}) {
  return http.post(apiEndPoint + "/paintings/new-painting", {
    title,
    author,
    description,
    date,
    original,
    thumbnail,
  });
}

export function updatePainting({
  id,
  title,
  author,
  original,
  thumbnail,
  description,
  date,
}) {
  return http.put(`${apiEndPoint}/paintings/update-painting/${id}`, {
    title,
    author,
    original,
    thumbnail,
    description,
    date,
  });
}

export function deletePainting(id) {
  return http.delete(`${apiEndPoint}/paintings/${id}`);
}

export function getPaintings() {
  return http.get(apiEndPoint + "/paintings");
}

export function getPaintingById(id) {
  return http.get(`${apiEndPoint}/paintings/${id}`);
}

export function getAbout() {
  return http.get(`${apiEndPoint}/about`);
}

export function updateAbout({ id, title, description }) {
  return http.put(`${apiEndPoint}/about/${id}`, {
    title,
    description,
  });
}

export default {
  createPainting,
  getPaintings,
  getPaintingById,
  updatePainting,
  deletePainting,
  getAbout,
  updateAbout,
};
