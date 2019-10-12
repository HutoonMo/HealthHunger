import React, { Component } from "react";
import nutfree from "./Nutfree.png";
import glutenfree from "./glutenfree.png";
import dairyfree from "./dairyfree.png";
import "./App.css";
import sinless from "./sinless.jpg";
import boga from "./boga.jpg";
import moonshell from "./moonshel.png";
import MdAddCircle from "react-ionicons/lib/MdAddCircle";
import MdRemoveCircle from "react-ionicons/lib/MdRemoveCircle";
class RestaurantPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.rest.name,
      logo: this.props.rest.logo,
      foodlist: this.props.rest.foodlist
    };
  }
  render() {
    console.log("props of restaurat page");
    console.log(this.props);

    var cat1;
    var cat2;
    var cat3;

    if (this.state.name == "sinless") {
      cat1 = (
        <div>
          <img
            src={dairyfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />
          <img
            src={glutenfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />
          <div>
            <MdAddCircle className='material-icons' fontSize="25px" color="#228B22" /> -{" "}
            <MdRemoveCircle className='material-icons' fontSize="25px" color="#d40224" />
          </div>
        </div>
      );
      cat2 = (
        <div>
          <img
            src={glutenfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />
          <img
            src={nutfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />
          <div>
            <MdAddCircle className='material-icons' fontSize="25px" color="#228B22" /> -{" "}
            <MdRemoveCircle className='material-icons' fontSize="25px" color="#d40224" />
          </div>
        </div>
      );

      cat3 = (
        <div>
          <img
            src={nutfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />
          <div>
            <MdAddCircle className='material-icons' fontSize="25px" color="#228B22" /> -
            <MdRemoveCircle className='material-icons' fontSize="25px" color="#d40224" />
          </div>
        </div>
      );
    } else if (this.state.name == "boga") {
      cat1 = (
        <div>
          {" "}
          <img
            src={dairyfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />{" "}
          <img
            src={nutfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />
          <div>
            <MdAddCircle className='material-icons' fontSize="25px" color="#228B22" /> -{" "}
            <MdRemoveCircle className='material-icons' fontSize="25px" color="#d40224" />
          </div>
        </div>
      );
      cat2 = (
        <div>
          <img
            src={glutenfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />{" "}
          <img
            src={dairyfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />
          <img
            src={nutfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />
          <div>
            <MdAddCircle className='material-icons' fontSize="25px" color="#228B22" /> -{" "}
            <MdRemoveCircle className='material-icons' fontSize="25px" color="#d40224" />
          </div>
        </div>
      );

      cat3 = (
        <div>
          {" "}
          <img
            src={nutfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />
          <div>
            <MdAddCircle className='material-icons' fontSize="25px" color="#228B22" /> -{" "}
            <MdRemoveCircle className='material-icons' fontSize="25px" color="#d40224" />
          </div>
        </div>
      );
    } else {
      cat1 = (
        <div>
          <img
            src={glutenfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />
          <img
            src={dairyfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />
          <div>
            <MdAddCircle className='material-icons' fontSize="25px" color="#228B22" /> -{" "}
            <MdRemoveCircle className='material-icons' fontSize="25px" color="#d40224" />
          </div>
        </div>
      );
      cat2 = (
        <div>
          <img
            src={glutenfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />
          <img
            src={dairyfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />

          <img
            src={nutfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />

          <div>
            <MdAddCircle className='material-icons' fontSize="25px" color="#228B22" /> -{" "}
            <MdRemoveCircle  className='material-icons' fontSize="25px" color="#d40224" />
          </div>
        </div>
      );

      cat3 = (
        <div>
          <img
            src={dairyfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />
          <img
            src={nutfree}
            width="50"
            height="50"
            className="d-inlines align-top"
            alt=""
          />

          <div>
            <MdAddCircle fontSize="25px" color="#228B22" /> -{" "}
            <MdRemoveCircle fontSize="25px" color="#d40224" />
          </div>
        </div>
      );
    }
    return (
      <div className="card" style={{ width: "100%" }}>
        <img
          className="card-img-top"
          src={this.state.logo}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{this.state.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
            

          <li className="list-group-item div1 ">
          <img
                src={this.state.foodlist[0].pic}
                style={{ width: 120, height: 120, borderRadius: 120 / 2, display: 'flex', justifyContent: 'left' }}
                className="  align-top mx-auto foodimg div1"

              />
              {this.state.foodlist[0].name} 
              {cat1}
            
          </li>

          <li className="list-group-item div1">
          <img
                src={this.state.foodlist[1].pic}
                style={{ width: 120, height: 120, borderRadius: 120 / 2, display: 'flex', justifyContent: 'left' }}
                className="  align-top mx-auto foodimg div1"

              />
            {this.state.foodlist[1].name}
            {cat2}
          </li>

          <li className="list-group-item div1">
          <img
                src={this.state.foodlist[2].pic}
                style={{ width: 120, height: 120, borderRadius: 120 / 2, display: 'flex', justifyContent: 'left' }}
                className="  align-top mx-auto foodimg div1"

              />
            {this.state.foodlist[2].name} {cat3}
          </li>
        </ul>
      </div>
    );
  }
}
export default RestaurantPage;
