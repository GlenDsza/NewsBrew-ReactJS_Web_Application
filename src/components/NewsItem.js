import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="Failed to load" />
          <div className="card-body">
            <h5 className="card-title" style={{textAlign: 'justify'}}>{title}</h5>
            <div className="d-flex justify-content-between mb-2">
              <span class="badge text-bg-secondary d-inline-block">
                {source.name}
              </span>
              <p className="card-text">
                <small className="text-muted">
                  by {author ? author : "Anonymous"}
                </small>
              </p>
            </div>
            <p className="card-text" style={{textAlign: 'justify'}}>{description}</p>
            <div className="d-flex justify-content-between">
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline-primary"
              >
                Read more...
              </a>
              <p className="card-text">
                <small className="text-muted">
                  {new Date(date).toGMTString().slice(17,)}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
