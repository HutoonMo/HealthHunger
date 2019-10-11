import React from "react";
import RestaurantItem from './RestaurantItem.js';

function RestaurantList(props){
    const restaurantList=props.rest;
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