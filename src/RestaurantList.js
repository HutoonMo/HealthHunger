import React from "react";
import RestaurantItem from './RestaurantItem.js';
import sinless from './sinless.jpg'
import boga from './boga.jpg'
import moonshell from './moonshel.png'
function RestaurantList(props){
    const restaurantList=[{name:"sinless",logo:sinless,foodlist:['Special Vegan Burger', 'Vegetable Pizza','Mozarella Tomato Sandwich'],},{name:"boga",logo:boga,foodlist:['Tofu Sandwich','Italian Salad','Salmon Sandwich']},{name:"moonshell",logo:moonshell,foodlist:['Mednight Molten','Berry Smoothie Bowle','Golden Coconut Late']}];
    const list = restaurantList.map(rest => (
       <td> <RestaurantItem rest={rest} key={rest.name} /></td>
      ));
      return (
    <table className="table"> 
    <tbody> <tr>{list}</tr></tbody>
    </table>
    );
}

export default RestaurantList;