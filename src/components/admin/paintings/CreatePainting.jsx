import React, { useContext, useEffect, useState } from "react";
import "../../../styles/CreatePainting.css";
import auth from "../../../services/AuthService";
import admin from "../../../services/AdminService";
import PaintingsContext from "../../paintingsContext.js";

function CreatePainting({ setIsAdding, addItem }) {
  // eslint-disable-next-line
  const [user, setUser] = useState("");
  useEffect(() => {
    try {
      const user = auth.getCurrentUser();
      setUser(user);
    } catch (error) {
      console.log(error.response.data);
    }
  }, []);

  const [title, setTitle] = useState("New Painting");
  const [author, setAuthor] = useState("Vaï");
  const [original, setOriginal] = useState("https://picsum.photos/400");
  const [thumbnail, setThumbnail] = useState(original);
  const [description, setDescription] = useState("le plus beau");
  const [date, setDate] = useState("");
  const { paintings, setPaintings } = useContext(PaintingsContext);
  // eslint-disable-next-line
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const painting = { title, author, original, thumbnail, description, date };
    try {
      await admin.createPainting(painting);
      setIsAdding(false);
      const tmp = [...paintings];
      tmp.push(painting);
      setPaintings(tmp);
    } catch (err) {
      const error = err.response.data;
      setErrors(error);
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form w-50 p-3 m-5 bg-light rounded border text-sm-left overflow-hidden shadow"
    >
      <h1 className="text-center">{title}</h1>
      <div className="form-group row">
        <label htmlFor="author" className="col-sm-2 col-form-label">
          Author
        </label>
        <div className="col-sm-10">
          <input
            value={author}
            onChange={(v) => setAuthor(v.target.value)}
            type="text"
            className="form-control"
            id="author"
            placeholder="Name"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          Title
        </label>
        <div className="col-sm-10">
          <input
            value={title}
            onChange={(v) => setTitle(v.target.value)}
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="description" className="col-sm-2 col-form-label">
          Description
        </label>
        <div className="col-sm-10">
          <textarea
            value={description}
            className="form-control"
            id="description"
            rows="3"
            onChange={(v) => setDescription(v.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="URL" className="col-sm-2 col-form-label">
          URL
        </label>
        <div className="col-sm-10">
          <input
            value={original}
            onChange={(v) => {
              setOriginal(v.target.value);
              setThumbnail(v.target.value);
            }}
            type="text"
            className="form-control"
            id="URL"
            placeholder="URL"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="date" className="col-sm-2 col-form-label">
          Date
        </label>
        <div className="col-sm-10">
          <input
            type="date"
            className="form-control-file"
            id="date"
            onChange={(v) => setDate(v.target.value)}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreatePainting;
