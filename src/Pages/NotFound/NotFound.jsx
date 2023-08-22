import React from "react";
import "../NotFound/notfound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found">
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go back to home?</Link>
      </div>
    </div>
  );
};

export default NotFound;
