import createReactClass from "create-react-class";
import React from "react";
import ReactDOM from 'react-dom';

const Hello = createReactClass({
  render: function() {
    return React.createElement("h3", null, "Hello Webpack!");
  }
});

ReactDOM.render(React.createElement(Hello), document.getElementById("react"));
