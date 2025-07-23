import React, { Component } from "react";

export class newsline extends Component {
  render() {
    const { title, description, imageUrl, url, publishedAt, source } = this.props;

    return (
      <div>
        <div className="card position-relative">
          {/* Square Notification-Style Badge */}
          <span
            className="position-absolute"
            style={{
              top: "10px",
              right: "10px",
              backgroundColor: "green", // Bootstrap danger red
              color: "white",
              padding: "4px 8px",
              fontSize: "0.75rem",
              fontWeight: "500",
              borderRadius: "4px",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
              maxWidth: "80%", // so it doesn’t spill over
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {source.name || "Unknown"}
          </span>

          <img
            src={
              imageUrl ||
              "https://via.placeholder.com/300x200.png?text=No+Image+Available"
            }
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/300x200.png?text=No+Image+Available";
            }}
            className="card-img-top"
            alt="news"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Read More
            </a>
            <div className="text-muted mt-2">
              on {new Date(publishedAt).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default newsline;
