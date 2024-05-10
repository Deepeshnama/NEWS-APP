import React, { useContext } from "react";
import ThemeContext from "../Context/theme/ThemeContext";

const NewsCard = ({news}) => {

  const {darkMode} = useContext(ThemeContext)

  const {title , author , description , url , urlToImage} = news

  return (
    <div className="col-12">
      <div className={darkMode ? "card mb-3 bg-warning text-light" : "card mb-3"}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
            src={urlToImage}
              className="img-fluid rounded-start"
              alt="..."
              style={{height : "100%"}}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {description}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {author}
                </small>
              </p>

              <a href={url} target="_blank" className={darkMode ? "btn btn-sm btn-secondary" : "btn btn-sm btn-primary"}>Read More...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
