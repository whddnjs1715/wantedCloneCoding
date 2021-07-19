import React, { Component } from "react";
import Nav from "../../Components/Layout/Nav";
import Space from "../../Components/Layout/Space";
import Body from "../../Components/Layout/Body";

class Main extends Component {
  
    render() {
      return (
        <div id="__next">
          <div>
            <Nav />
            <Space />
            <Body />
          </div>
        </div>
      );
    }
  }
  
  export default Main;