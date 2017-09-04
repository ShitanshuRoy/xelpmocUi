import React, { Component } from "react";
import "./css/ListHeader.css";

export default class ListHeader extends Component {
  render() {
    return <div className="ListHeader">
      <div className="HeadItems">item1</div>
      <div className="HeadItems">item2</div>
      <div className="HeadItems">item3</div>
    </div>;
  }
}
