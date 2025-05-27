import { useEffect, useState } from "react";
import { resDataList } from "../utils/swiggyResDataList";
import { Link } from "react-router-dom";

const swiggyImgSourcePath =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/";
const Body = function () {
  return (
    <div id="body">
      <SearchBoxDiv />
      {/*<FoodItemsDiv />*/}
    </div>
  );
};

const SearchBoxDiv = function () {
  const [listOfRestaurants, setListOfRestaurants] = useState(resDataList);

  const [searchTxt, setSearchTxt] = useState("");

  // const fetchedResData = async () => {
  //   const data = await fetch("/swiggy_res_data.json");

  //   // const text = await data.text();
  //   // console.log(text);

  //   const jsonObj = JSON.parse(data);

  //   setListOfRestaurants(
  //     jsonObj?.data?.cards[3]?.card?.card?.gridElements.infoWithStyle
  //       .restaurants
  //   );
  // };

  // useEffect(() => {
  //   fetchedResData();
  // }, []);
  useEffect(() => {
    if (searchTxt == "") {
      setListOfRestaurants(resDataList);
    }
  }, [searchTxt]);
  return (
    <>
      <div id="searchBox">
        <input
          id="searchTxt"
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);

            const filtedResList = resDataList.filter((restaurant) => {
              return restaurant.info.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            });

            setListOfRestaurants(filtedResList);
          }}
        />
        <button>Search</button>
        <button
          onClick={() => {
            const filtedResList = resDataList.filter((restaurant) => {
              return restaurant.info.avgRating > 4.3;
            });

            setListOfRestaurants(filtedResList);
          }}
        >
          Top Rated
        </button>
        <button
          onClick={() => {
            const filtedResList = resDataList.filter((restaurant) => {
              return restaurant.info.cuisines.some(
                (cuisine) => cuisine == "Biryani"
              );
            });
            setListOfRestaurants(filtedResList);
          }}
        >
          Biryani
        </button>
        <button
          onClick={() => {
            setListOfRestaurants(resDataList);
          }}
        >
          Clear Filter
        </button>
      </div>

      <div id="foodItems">
        {listOfRestaurants.map((restaurant, index) => {
          var resId = restaurant.info.id;
          return (
            <Link
              key={index}
              to="/restaurant"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <RestaurantCard key={index} resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

//
// const FoodItemsDiv = function () {
//   return (
//     <div id="foodItems">
//       {resDataList.map((restaurant, index) => {
//         return <RestaurantCard key={index} resData={restaurant} />;
//       })}
//     </div>
//   );
// };

const RestaurantCard = function (props) {
  return (
    <div className="foodCard">
      <img
        src={swiggyImgSourcePath + props.resData.info.cloudinaryImageId}
        alt="food image"
      />
      <h4>{props.resData.info.id}</h4>
      <h4>{props.resData.info.name}</h4>
      <h4>{props.resData.info.avgRating}</h4>
      <h4>{props.resData.info.cuisines.slice(0, 3).join(",")}</h4>
      <h4>{props.resData.info.sla.deliveryTime}</h4>
    </div>
  );
};

export default Body;
