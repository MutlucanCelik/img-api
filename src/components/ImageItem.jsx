import React from "react";

export default function ImageItem({ img }) {
  return (
    <div className="img-item">
      <img
        className="img-item__img"
        src={img.urls.small}
        alt={img.alt_description}
      />
    </div>
  );
}
