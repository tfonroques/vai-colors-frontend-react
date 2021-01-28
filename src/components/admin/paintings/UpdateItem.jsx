import React, { useContext, useState } from "react";
import "../../../styles/UpdateItem.css";
import admin from "../../../services/AdminService";
import PaintingsContext from "../../paintingsContext.js";

function UpdateItem({ painting }) {
  const [title, setTitle] = useState(painting.title);
  const [author, setAuthor] = useState(painting.author);
  const [original, setOriginal] = useState(painting.original);
  const [thumbnail, setThumbnail] = useState(painting.original);
  const [description, setDescription] = useState(painting.description);
  const [date, setDate] = useState(painting.date);
  const [errors, setErrors] = useState([]);

  const { paintings, setPaintings } = useContext(PaintingsContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = painting._id;
    const res = {
      id,
      title,
      author,
      original,
      thumbnail,
      description,
      date,
    };
    try {
      await admin.updatePainting(res);
      painting = { ...res, _id: painting._id, isUpdating: false };
      const index = paintings.findIndex((e) => e._id === painting._id);
      const tmp = [...paintings];
      tmp[index] = { ...painting };
      setPaintings(tmp);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="media text-left border-top p-3">
      <img className="img-thumbnail" src={thumbnail} alt="Generic" />
      <div className="media-body mx-3">
        <div className="d-flex w-100 justify-content-between">
          <input
            type="text"
            className="form-control mb-1 mr-1"
            id="title"
            placeholder="Title"
            onChange={(v) => setTitle(v.target.value)}
            value={title}
          />
          <small>
            <input
              className="form-control "
              value={date}
              onChange={(v) => setDate(v.target.value)}
              id="date"
              placeholder="Date"
              type="date"
            />
          </small>
        </div>

        <textarea
          value={description}
          className="form-control mb-1"
          id="description"
          placeholder="Description"
          onChange={(v) => setDescription(v.target.value)}
          rows="4"
        ></textarea>
        <small>
          <input
            id="author"
            placeholder="Author"
            value={author}
            onChange={(v) => setAuthor(v.target.value)}
            className="form-control mb-1"
          />
        </small>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-info">
              Update
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UpdateItem;
