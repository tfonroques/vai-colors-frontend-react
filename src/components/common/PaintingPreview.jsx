import React from "react";
import { Link } from "react-router-dom";
import "../../styles/PaintingPreview.css";
import { motion } from "framer-motion";

function PaintingPreview({ painting }) {
  return (
    <Link to={`/paintings/${painting._id}`}>
      <motion.div
        className="overflow-hidden shadow"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          className="card-img-top"
          src={painting.original}
          alt={painting.title}
        />
      </motion.div>
    </Link>
  );
}

export default PaintingPreview;
