import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error">
      <h1>Error!! 404, The Page You have requested is not found</h1>
      <Link className="home-btn" to="/">
        Go Back to Home
      </Link>
    </div>
  );
}
