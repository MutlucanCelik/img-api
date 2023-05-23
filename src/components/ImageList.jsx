import React from "react";
import ImageItem from "./ImageItem";

export default function ImageList({ myImages }) {
  console.log(myImages);
  return (
    <div className="img-container">
      {myImages.map((img, index) => (
        <ImageItem key={index} img={img} />
      ))}
    </div>
  );
}
