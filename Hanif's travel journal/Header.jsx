import React from "react";
import ReactDOM from "react-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>Hanif's Travel Journal</h1>
      <h2>Discover and Enjoy Exceptional Adventures</h2>
      <p>Discover amazing destinations and create your journey.</p>
    </div>
  );
}

ReactDOM.render(<Header />, document.getElementById("root"));
