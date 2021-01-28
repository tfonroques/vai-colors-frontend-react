import React, { useContext, useState } from "react";
import "../../../styles/PaintingItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import admin from "../../../services/AdminService";
import PaintingsContext from "../../paintingsContext.js";

function PaintingItem({ painting, updateItem }) {
  const { paintings, setPaintings } = useContext(PaintingsContext);

  async function deleteItem() {
    await admin.deletePainting(painting._id);
    const index = paintings.findIndex((e) => e._id === painting._id);
    const tmp = [...paintings];
    tmp.splice(index, 1);
    setPaintings(tmp);
  }

  return (
    <React.Fragment>
      <div className="media text-left border-top p-3">
        <img className="img-thumbnail" src={painting.thumbnail} alt="Generic" />
        <div className="media-body mx-3">
          <div className="btn-group float-right">
            <button
              type="button"
              className="btn btn-info btn-sm dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={["far", "edit"]} />
            </button>
            <div className="dropdown-menu">
              <button
                className="dropdown-item"
                onClick={() => {
                  updateItem(painting._id);
                }}
              >
                Edit
              </button>
              <div className="dropdown-divider"></div>
              <button
                className="dropdown-item text-danger"
                onClick={() => {
                  deleteItem();
                }}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{painting.title}</h5>
            <small>{painting.date}</small>
          </div>
          <p className="mb-1">{painting.description}</p>
          <small>{painting.author}</small>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PaintingItem;
