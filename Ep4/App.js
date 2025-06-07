/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./resList";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
        />
      </div>

      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>SignIn</li>
        </ul>
      </div>
    </div>
  );
};
const Card = ({ resData }) => {
  const { resName, cuisine, rating, deliveryTime, img } = resData;
  return (
    <div className="card">
      <img
        className="card-img"
        src={`https://foodish-api.com/images/${img}`}
        alt="Food Picture"
      />
      <h3>{resName}</h3>
      <h5>{cuisine}</h5>
      <h5>{rating}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="card-container">
        {resList.map((Restaurant, index) => (
          <Card resData={Restaurant} key={index} />
        ))}
      </div>
    </div>
  );
};

const App = () => (
  <div id="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
