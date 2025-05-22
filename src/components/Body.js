import { useState } from "react";
import { resDataList } from "../utils/swiggyResDataList";

var searchTxt = "";

const Body = function () {
  return (
    <div id="body">
      <SearchBoxDiv />
      <FoodItemsDiv />
    </div>
  );
};

var searchRes = function () {
  const [resDataList, setresDataList] = useState(resDataList);
  searchTxt = document.getElementById("searchTxt").value;

  resDataList = resDataList.filter(function (restaurant) {
    return searchTxt == restaurant.info.name;
  });

  console.log(resDataList);

  setresDataList(resDataList);
};

const SearchBoxDiv = function () {
  const [searchTxt, setSearchTxt] = useState("");
  return (
    <div id="searchBox">
      <input
        id="searchTxt"
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchTxt}
        onChange={(e) => {
          var temp = e.target.value;
          console.log("Before updation:" + temp);
          setSearchTxt(temp);
          console.log("After updation:" + temp);
          console.log(searchTxt);
        }}
      />
      <button>Search</button>
    </div>
  );
};

const swiggyImgSourcePath =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/";
const FoodItemsDiv = function () {
  return (
    <div id="foodItems">
      {resDataList.map((restaurant, index) => {
        return <RestaurantCard key={index} resData={restaurant} />;
      })}
    </div>
  );
};

const RestaurantCard = function (props) {
  return (
    <div className="foodCard">
      <img
        src={swiggyImgSourcePath + props.resData.info.cloudinaryImageId}
        alt="food image"
      />
      <h4>{props.resData.info.name}</h4>
      <h4>{props.resData.info.avgRating}</h4>
      <h4>{props.resData.info.cuisines.slice(0, 3).join(",")}</h4>
      <h4>{props.resData.info.sla.deliveryTime}</h4>
    </div>
  );
};

export default Body;
