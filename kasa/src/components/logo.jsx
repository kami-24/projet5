import React from "react";

export default function Logo({ img_path, img_name }) {
  const logo_data = {
    name: img_name,
    imageUrl: img_path,
  };

  return (
    <img
      className="logo"
      src={logo_data.imageUrl}
      alt={"Photo de " + logo_data.name}
    />
  );
}
