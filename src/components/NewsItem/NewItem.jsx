import React from "react";

const NewItem = ({ title, desc, imgUrl, url, author, date }) => {
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={imgUrl ? imgUrl : "../img/news.jpg"}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{!desc ? `${title}` : desc}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={url} target="_blank" className="btn btn-sm  btn-dark">
            For More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
