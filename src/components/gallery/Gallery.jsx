import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Gallery.css";
import gallery_img from "../../constants/galleryimages";

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div>
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {gallery_img.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery ${i}`}
            className="gallery-img"
            onClick={() => {
              setPhotoIndex(i);
              setIsOpen(true);
            }}
          />
        ))}
      </Masonry>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={gallery_img.map((src) => ({ src }))}
          on={{ view: ({ index }) => setPhotoIndex(index) }}
        />
      )}
    </div>
  );
}
