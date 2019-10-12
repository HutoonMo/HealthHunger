import React from "react";
import RestaurantItem from "./RestaurantItem.js";
import sinless from "./sinless.jpg";
import boga from "./boga.jpg";
import moonshell from "./moonshel.png";
import goldenlight from "./goldenlight.jpg";
import naturespirit from "./naturespirit.jpg";
import veganprotien from "./veganprotien.jpg";
import tufosand from "./tufosand.jpg";
import salmonsand from "./salmonsand.jpg";
import italiansalad from "./italiansalad.jpg";
import RusticPizza from "./RusticPizza.jpg";
import FancyBurger from "./FancyBurger.png";
import bananaBread from "./bananaBread.PNG";

function RestaurantList(props) {
  const restaurantList = [
    {
      name: "sinless",
      logo: sinless,
      foodlist: [
        { name: "Fancy Vegan Burger", pic: FancyBurger },
        { name: "Rustic Pizza", pic: RusticPizza },
        { name: "Banana Bread", pic: bananaBread }
      ]
    },
    {
      name: "boga",
      logo: boga,
      foodlist: [
        { name: "Tofu Sandwich", pic: tufosand },
        { name: "Italian Salad", pic: italiansalad },
        { name: "Salmon Sandwich", pic: salmonsand }
      ]
    },
    {
      name: "moonshell",
      logo: moonshell,
      foodlist: [
        { name: "Golden Light Oatmeal", pic: goldenlight },
        { name: "Nature Spirit", pic: naturespirit },
        { name: "Vegan Protein", pic: veganprotien }
      ]
    }
  ];

  const list = restaurantList.map(rest => (
    <td>
      {" "}
      <RestaurantItem rest={rest} key={rest.name} />
    </td>
  ));
  return (
    <table className="table">
      <tbody>
        {" "}
        <tr>{list}</tr>
      </tbody>
    </table>
  );
}

export default RestaurantList;
