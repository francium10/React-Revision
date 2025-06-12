/** @format */

import { CDN_URL } from "../utils/constant";

const Card = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="card">
      <img
        className="card-img"
        src={CDN_URL + cloudinaryImageId}
        alt="Food Picture"
      />
      <div className="restrauant-details">
        <h3 className="restaurant-name">
          {name.slice(0, 22)}
          {name.length > 22 ? "..." : ""}
        </h3>

        <div className="esa-rating">
          <h4 className="rating">
            <span>{avgRating} Stars</span>
          </h4>
          <h4>{costForTwo}</h4>
          <h4>{sla?.slaString}</h4>
        </div>
        <p className="cuisine">
          {cuisines.join(", ").slice(0, 30)}
          {cuisines.join(", ").length > 30 ? "..." : ""}
        </p>
        {/* <p className="location">{areaName}</p> */}
      </div>
    </div>
  );
};

export default Card;
