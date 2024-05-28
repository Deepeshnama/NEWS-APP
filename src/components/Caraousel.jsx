import React from "react";

const Caraousel = () => {

    const customStyle = {
        // width : "1000px" ,
        height : "75vh" ,
        // objectFit : "contain"
    }

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://img.freepik.com/free-vector/breaking-news-live-streaming-concept_23-2148500721.jpg?w=996&t=st=1716880772~exp=1716881372~hmac=2dced0553b1bcedd496aba5823ec0d7d0f1751d9c1d2e21e7e61d65a3aae2c5e"
            className="d-block w-100"
            alt="..."
            style={customStyle}
          />
        </div>
        
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Caraousel;
