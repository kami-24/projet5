import React from "react";

export default function ImageBanner({ img_path, img_name, img_banner_style }) {
  const image_a_propos = {
    name: img_name,
    imageUrl: img_path,
  };

  return (
    <img
      className={img_banner_style}
      src={image_a_propos.imageUrl}
      alt={"Photo de " + image_a_propos.name}
    />
  );
}
