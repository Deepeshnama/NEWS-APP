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
            src="https://media.tenor.com/AZpOPn5hnAUAAAAi/ranch1.gif"
            className="d-block w-100"
            alt="..."
            style={customStyle}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.tenor.com/PqpfXhwGjd8AAAAi/tv-news.gif"
            className="d-block w-100"
            alt="..."
            style={customStyle}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media1.tenor.com/m/YPS4UpFRyBUAAAAd/fake-news-lady-decade.gif"
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
