import React from "react";
import ReactDOM from "react-dom";
import API from "../api";
import ServerActions from "../Actions/ServerActions";
import LinkStore from "../Stores/LinkStore";

let _getAppState = () => {
  return { links: LinkStore.getAll() };
};

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = _getAppState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    API.fetchLinks().then(data => {
      ServerActions.receiveLinks(data);
    });
    LinkStore.on("change", this.onChange);
  }

  componentWillUnmount() {
    LinkStore.removeListener("change", this.onChange);
  }

  onChange() {
    this.setState(_getAppState());
  }

  render() {
    const content = this.state.links.map(link => {
      return (
        <li key={link._id}>
          <a href={link.url}> {link.title}</a>
        </li>
      );
    });
    return (
      <React.Fragment>
        <h3>Links</h3>
        <ul>{content}</ul>
      </React.Fragment>
    );
  }
}
