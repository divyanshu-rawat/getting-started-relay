import React from "react";
import ReactDOM from "react-dom";
import API from "../api";

export default class Main extends React.Component {
  componentDidMount() {
    API.fetchlinks().then(data => {
      console.log(data);
    });
  }
  render() {
    return (
      <React.Fragment>
        <h3>Links</h3>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </React.Fragment>
    );
  }
}
