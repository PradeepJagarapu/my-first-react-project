import { useEffect, useState } from "react";
import { resMenu } from "../utils/swiggyResDataList";

const Restaurant = function (props) {
  const [resMenuList, setResMenuList] = useState(resMenu);

  // const menuData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=396741&submitAction=ENTER"
  //   );

  //   const jsonObj = await data.json();

  //   setResMenuList(
  //     jsonObj?.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
  //       .carousel
  //   );
  // };

  // useEffect(() => {
  //   menuData();
  // }, []);

  return (
    <>
      <h1>id:{resMenuList[0].dish.info.id}</h1>
      <h1>name:{resMenuList[0].dish.info.addons[0].choices[0].name}</h1>
      <h1>category:{resMenuList[0].dish.info.category}</h1>
      <h1>inStock:{resMenuList[0].dish.info.inStock}</h1>
      <h2>List</h2>
    </>
  );
};

export default Restaurant;
