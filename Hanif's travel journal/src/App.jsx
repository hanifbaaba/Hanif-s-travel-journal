import React from "react";
import Navbar from "../Navbar";
import ReactDOM from "react-dom";
import Header from "../Header";
import Data from "..//Data";
import Card from "./Card";

export default function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <Header />

      <section className="card-list">{cards}</section>
    </div>
  );
}
