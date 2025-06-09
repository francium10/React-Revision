/** @format */

import Card from "./Card";
import { resList } from "../utils/MockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunt] = useState(resList);

  return (
    <div className="body">
      <div className="Filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraunts.filter((res) => {
              // Extract the numeric rating from the string (e.g., "4.9 Stars" -> 4.9)
              const numericRating = parseFloat(res.rating.split(" ")[0]);
              return numericRating > 4;
            });
            setListOfRestraunt(filteredList);
          }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="card-container">
        {listOfRestraunts.map((Restaurant, index) => (
          <Card resData={Restaurant} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
