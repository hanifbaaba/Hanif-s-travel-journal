import React from "react";
import ReactDOM from "react-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

ReactDOM.render(<Navbar />, document.getElementById("root"));
