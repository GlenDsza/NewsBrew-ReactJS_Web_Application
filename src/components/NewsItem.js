import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div
        className={`card overflow-hidden`}
        style={{
          boxShadow: "0 0.125rem 0.675rem rgb(0 0 0 / 30%)",
          backgroundColor: `${
            props.mode === "light" ? "" : "#C0C1CB"
          }`,
        }}
      >
        <img src={imageUrl} className="card-img-top" alt="Failed to load" />
        <div className="card-body" style={{ height: "260px" }}>
          <h5 className="card-title" style={{ textAlign: "justify" }}>
            {title}
          </h5>
          <div className="d-flex justify-content-between mb-2">
            <span className="badge text-bg-secondary d-inline-block">
              {source.name
                ? source.name.length > 18
                  ? source.name.slice(0, 18)
                  : source.name
                : "Source"}
            </span>
            <p className="card-text">
              <small className="text-muted">
                -{" "}
                {author
                  ? author.length > 15
                    ? author.slice(0, 15)
                    : author
                  : "Anonymous"}
              </small>
            </p>
          </div>
          <p className="card-text" style={{ textAlign: "justify" }}>
            {description}
          </p>
          <div className="d-flex justify-content-between">
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline-primary position-absolute"
              style={{ bottom: "10px", left: "12px" }}
            >
              Read more...
            </a>
            <p
              className="card-text position-absolute"
              style={{ bottom: "10px", right: "12px" }}
            >
              <small className="text-muted">
                {new Date(date).toGMTString().slice(17)}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
