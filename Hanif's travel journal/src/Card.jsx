import React from "react";
import ReactDOM from "react-dom";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.coverImg} className="card-img" />
      <div className="card-content">
        <div className="card-info">
          <p className="title">{props.title}</p>
          <p className="description">{props.description}</p>
        </div>
        <div className="card-stats">
          <span className="rating">Rating: {props.rating}</span>
          <span className="location">{props.location}</span>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<Card />, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";

// export default function Card(props) {
//   return (
//     <div className="card">
//       <img src={props.item.coverImg} className="card-img" />
//       <div className="card-stats">
//         <p>{props.item.title}</p>
//         <p>{props.item.description}</p>
//         <span>{props.item.rating}</span>
//         <span>{props.item.location}</span>
//       </div>
//       <p>{props.item.title}</p>
//     </div>
//   );
// }
// ReactDOM.render(<Card />, document.getElementById("root"));
