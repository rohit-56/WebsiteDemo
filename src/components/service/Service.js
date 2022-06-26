import React from "react";
import data from "./Details";
import Carousel from "react-elastic-carousel";
import Card from "./card/Card";

function Service() {
  return (
    <div className="container">
      <Carousel itemsToShow={3} itemsToScroll={1}>
        {data.map((value, index) => {
          return (
            <Card
              key={index}
              title={value.Title}
              description={value.description}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default Service;
