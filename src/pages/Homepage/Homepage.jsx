import React from "react";
import Footer from "./Footer";
import DisplayCard from "./DisplayCard";
import image1 from "../../assets/slide8.jpg";
import { CardData, DataElement } from "../../data/Data";

const Homepage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row ">
        {CardData.map((data, i) => (
          <DisplayCard key={i} data={data} />
        ))}
      </div>
      <div>
        <DisplayCard data={DataElement} />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
