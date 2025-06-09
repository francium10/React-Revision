/** @format */

import { FOODISH_URL } from "../utils/constant";

const Card = ({ resData }) => {
  const { resName, cuisine, rating, deliveryTime, img } = resData;
  return (
    <div className="card">
      <img
        className="card-img"
        src={`${FOODISH_URL}${img}`}
        alt="Food Picture"
      />
      <h3>{resName}</h3>
      <h5>{cuisine}</h5>
      <h5>{rating}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export default Card;
