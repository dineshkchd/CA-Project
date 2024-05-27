import React from "react";

const ExampleCarouselImage = ({ src, text,herobtn,spantext }) => {

  const bannerStyle = {
    background: `url(${src})`
  };
  return (
    <div className="carousel-image-container" style={bannerStyle}>
      <div className="carousel-text">
        <p>{text}</p>
        <span className="bottomtext">{spantext}</span>
        <br />
        <button className="btn">{herobtn}</button>
      </div>
    </div>
  );
};

export default ExampleCarouselImage;
