import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import admin from "../../services/AdminService";

function PaintingDetails({ history }) {
  const [painting, setPainting] = useState({});
  const { id } = useParams();

  async function getPainting() {
    try {
      const { data } = await admin.getPaintingById(id);
      setPainting(data[0]);
    } catch (error) {
      error.response && console.log(error.response.data);
    }
  }

  useEffect(() => {
    getPainting();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-light p-4 rounded">
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={() =>
          history.push({
            pathname: `/edit-painting/${id}`,
            state: painting,
          })
        }
      >
        Edit
      </button>
      <img src={painting.url} className="img-fluid" alt="joli"></img>
      <h1 className="display-1">{painting.title}</h1>
      <p className="lead">{painting.description}</p>
      <small className="text-muted text-right">{painting.author}</small>
    </div>
  );
}

export default PaintingDetails;
