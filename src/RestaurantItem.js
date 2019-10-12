import React, { Component } from "react";
import RestaurantPage from "./RestaurantPage";
import "./App.css";
class RestaurantItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.rest.name,
      logo: this.props.rest.logo,
      clicked: false,
      foodlist:this.props.rest.foodlist,
    };
  }

  clicked = () => {
    this.setState({ clicked: true });
  };

  render() {
    var show = "";
    if (this.state.clicked) {
      show = <RestaurantPage rest={this.props.rest} />;
      console.log(this.props.rest);
      //this.setState({ clicked: false })
    } else {
      show = (
        <div className="card" style={{ width: "89%" }}>
          <img
            className="card-img-top"
            src={this.state.logo}
            alt="Card image cap"
          />
          <div className="card-body">
            <a
              onClick={() => this.setState({ clicked: true })}
              className="btn btn-warning btn-lg"
            >
              {this.state.name}
            </a>
          </div>
        </div>
      );
    }
    return <div> {show} </div>;
  
  }
}
export default RestaurantItem;