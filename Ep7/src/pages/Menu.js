/** @format */

import Shimmer from "../components/Shimmer";
import { useEffect, useState } from "react";

const Menu = () => {
  const [resInfo, setResInfo] = useState(null); // Initialize as null instead of empty string

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=772042&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      console.log(json);

      const information = json?.data?.cards[2]?.card?.card?.info;
      setResInfo(information);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  // Show shimmer while loading
  if (!resInfo) {
    return <Shimmer />;
  }

  // Destructure as object
  const { name, cuisines, costForTwoMessage, avgRating, areaName } = resInfo;

  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </h3>
      <p>{areaName}</p>
      <p>{avgRating}</p>
    </div>
  );
};

export default Menu;
