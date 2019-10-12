import React, { Component } from "react";
import nutfree from './Nutfree.png'
import glutenfree from './glutenfree.png'
import dairyfree from './dairyfree.png'
import './App.css';
class RestaurantPage extends Component {
    constructor(props) {
        super(props);
this.state={
    name:this.props.rest.name,
    logo:this.props.rest.logo,
    foodlist:this.props.rest.foodlist,
};
    }
      render() { 
          var cat1;
          var cat2;
          var cat3;
          if(this.state.name=="sinless"){
              cat1= <div> <img src={dairyfree} width="50" height="50" className="d-inlines align-top" alt=""/> <img src={glutenfree} width="50" height="50" className="d-inlines align-top" alt=""/></div>;
              cat2= <div> <img src={glutenfree} width="50" height="50" className="d-inlines align-top" alt=""/> <img src={nutfree} width="50" height="50" className="d-inlines align-top" alt=""/></div> ;
          
              cat3= <div> <img src={nutfree} width="50" height="50" className="d-inlines align-top" alt=""/></div> ;
            } return(
<div class="card" style={{ width: "100%" }}>
  <img class="card-img-top" src={this.state.logo} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{this.state.name}</h5>
    
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{this.state.foodlist[0]} {cat1}</li>
    <li class="list-group-item">{this.state.foodlist[1]} {cat2}</li>
    <li class="list-group-item">{this.state.foodlist[2]} {cat3}</li>
  </ul>

</div>
        );
}

      
      
    }
    export default RestaurantPage;