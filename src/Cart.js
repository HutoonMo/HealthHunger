import React, { Component } from 'react';
import RestaurantItem from './RestaurantItem.js';
import sinless from './sinless.jpg'
import boga from './boga.jpg'
import moonshell from './moonshel.png'
import MyCart from './MyCart.png'
import MdTrash from 'react-ionicons/lib/MdTrash'
class Cart extends Component {
  render() {
    const itemlist={name:"sinless",logo:sinless,foodlist:['Special Vegan Burger', 'Vegetable Pizza','Mozarella Tomato Sandwich']};

      return (
          <div className="col-centered"  style={{ width: "30%"}}>
              <div> </div>
<h1 className="mycartdiv"> My Cart </h1>
    <table className="table"> 
    <tbody> <tr>  
               <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {itemlist.foodlist[0]} {<div style={{display: 'flex', justifyContent: 'right'}}> <MdTrash  className='trashicon' fontSize="25px" color="#000000" /></div>}
          </li>
          <li className="list-group-item">
            {itemlist.foodlist[1]}  {<div style={{display: 'flex', justifyContent: 'right'}}> <MdTrash className='trashicon' fontSize="25px" color="#000000" /> </div>}
          </li>
          <li className="list-group-item">
            {itemlist.foodlist[2]}  {<div style={{display: 'flex', justifyContent: 'right'}}> <MdTrash className='trashicon' fontSize="25px" color="#000000" /> </div>}
          </li>
        </ul></tr> 
        <tr> <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Address</span>
  </div>
  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>

  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Phone#</span>
  </div>
  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>


</div>
</tr>
        <tr>
        <button type="button" class="btn btn-lg btn-warning">Check Out</button> </tr></tbody>
    </table>
    </div>
    );
}
}

export default Cart;