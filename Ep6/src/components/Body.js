/** @format */

import Card from "./Card";
// import { SWIGGY_API_URL } from "../utils/constant";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunt] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3038945&lng=70.80215989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );

    // Optional chaining
    setListOfRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestraunts.length === 0) {
    return <h1>Loading......</h1>;
  }

  return (
    <div className="body">
      <div className="Filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraunts.map((res) => {
              return res.info.avgRating > 4;
            });
            console.log(filteredList);
            setListOfRestraunt(filteredList);
          }}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="card-container">
        {listOfRestraunts.map((Restaurant) => (
          <Card resData={Restaurant} key={Restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
