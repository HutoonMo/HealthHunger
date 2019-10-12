import React,{Component} from 'react';

import './App.css';
import sinless from './sinless.jpg'
import boga from './boga.jpg'
import moonshell from './moonshel.png'
import Header from './Header.js';
import goldenlight from './goldenlight.jpg'
import naturespirit from './naturespirit.jpg'
import veganprotien from './veganprotien.jpg'
import tufosand from './tufosand.jpg'
import salmonsand from './salmonsand.jpg'
import italiansalad from './italiansalad.jpg'


import RestaurantList from "./RestaurantList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      logo: "",
rests:[{name:"sinless",logo:sinless,foodlist:['Special Vegan Burger', 'Vegetable Pizza','Banana Bread'],},{name:"boga",logo:boga,foodlist:[{name:'Tofu Sandwich',pic:tufosand},{name:'Italian Salad',pic:italiansalad},{name:'Salmon Sandwich',pic:salmonsand}]},{name:"moonshell",logo:moonshell,foodlist:[{name:'Golden Light Oatmeal',pic:goldenlight},{name:'Nature Spirit',pic:naturespirit},{name:'Vegan Protein',pic:veganprotien}]}],
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
