import banner_home from "../assets/banner_home.png";
import data_logements from "../data/logements.json";
import React from "react";
import Card from "../components/cards";
import "./home.scss";
import ImageBanner from "../components/image_banner";

export default function Home() {
  return (
    <>
      <div className="bandeau">
        <h1>Chez vous, partout et ailleurs</h1>
        <ImageBanner img_path={banner_home} img_name={"photo falaise mer"} />
      </div>
      <div>
        <section className="cards">
          {data_logements.map((product) => (
            <Card key={product.id} logement={product} />
          ))}
        </section>
      </div>
    </>
  );
}

