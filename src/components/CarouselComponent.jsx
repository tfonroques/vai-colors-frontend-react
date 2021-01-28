import ImageGallery from "react-image-gallery";
import React, { useContext } from "react";
import PaintingsContext from "./paintingsContext.js";

const CarouselComponent = () => {
  const { paintings } = useContext(PaintingsContext);

  if (paintings.length === 0) return null;
  return (
    <div>
      <h1>{paintings[0].title}</h1>
      <ImageGallery items={paintings} showPlayButton={false} />
    </div>
  );
};

export default CarouselComponent;
