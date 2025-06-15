/** @format */

import Card from "./Card";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body render");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3038945&lng=70.80215989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // Extract restaurants data with optional chaining
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    // Set both states with the same data initially
    setListOfRestraunt(restaurants || []);
    setFilteredRestaurant(restaurants || []); // Fixed: using 'restaurants' and added fallback
  };

  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="Filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            placeholder="Enter restraunt,cuisine.."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4"
            onClick={() => {
              const filteredRestraunt = listOfRestraunts.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestraunt);
            }}>
            Search
          </button>
        </div>
        <div className="px-4 py-2 bg-grey-100 m-4">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredLogic = listOfRestraunts.filter((res) => {
                return res.info.avgRating > 4.4;
              });
              setFilteredRestaurant(filteredLogic);
            }}>
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((Restaurant) => (
          <Card resData={Restaurant} key={Restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
