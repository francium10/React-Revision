/** @format */

import { CDN_URL } from "../utils/constant";

const Card = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    areaName,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] hover:bg-gray-100">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="Food Picture"
      />
      <div className="restrauant-details">
        <h3 className="font-bold py-4 text-lg">
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
        <p className="location">{areaName}</p>
      </div>
    </div>
  );
};

export default Card;
