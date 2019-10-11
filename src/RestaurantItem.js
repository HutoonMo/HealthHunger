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
    };
  }

  clicked = () => {
    this.setState({ clicked: true });
  };

  render() {
    var show = "";
    if (this.state.clicked) {
      show = <RestaurantPage rest={this.props.rest} />;
      console.log("clicked");
      //this.setState({ clicked: false })
    } else {
      show = (
        <div class="card" style={{ width: "89%" }}>
          <img
            class="card-img-top"
            src={this.state.logo}
            alt="Card image cap"
          />
          <div class="card-body">
            <a
              onClick={() => this.setState({ clicked: true })}
              class="btn btn-warning btn-lg"
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
