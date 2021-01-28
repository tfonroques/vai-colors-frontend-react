import React, { useContext } from "react";
import PaintingPreview from "./PaintingPreview";
import PaintingsContext from "../paintingsContext.js";

import "../../styles/Gallery.css";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

function Gallery(props) {
  const { paintings } = useContext(PaintingsContext);

  if (paintings.length === 0) {
    return null;
  }

  return (
    <div className="content">
      <div className="text-center">
        <h1 className="display-5">Vaïcolors' Art Gallery</h1>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {paintings.map((p) => (
          <PaintingPreview key={p._id} painting={p} />
        ))}
      </Masonry>
    </div>
  );
}

export default Gallery;
