import React from "react";
import ReactDOM from "react-dom";
import API from "../api";
import ServerActions from "../Actions/ServerActions";

export default class Main extends React.Component {
  componentDidMount() {
    API.fetchLinks().then(data => {
      ServerActions.receiveLinks(data);
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
