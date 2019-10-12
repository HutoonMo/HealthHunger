import React,{Component} from 'react';

import './App.css';
import sinless from './sinless.jpg'
import boga from './boga.jpg'
import moonshell from './moonshel.png'
import Header from './Header.js';

import RestaurantList from "./RestaurantList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      logo: "",
rests:[{name:"sinless",logo:sinless,foodlist:['Special Vegan Burger', 'Vegetable Pizza','Mozarella Tomato Sandwich'],},{name:"boga",logo:boga,foodlist:['Tofu Sandwich','Italian Salad','Salmon Sandwich']},{name:"moonshell",logo:moonshell,foodlist:['Mednight Molten','Berry Smoothie Bowle','Golden Coconut Late']}],
    };
  }

  render(){
  return (

    <div className="App">

      <Header/>
     
    </div>

  );
}
}

export default App;
