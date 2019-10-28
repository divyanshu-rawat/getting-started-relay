import createReactClass from "create-react-class";
import React from "react";
import ReactDOM from "react-dom";

const Hello = createReactClass({
  render: function() {
    /* Before introducing babel-loader into project.
        return React.createElement("h3", null, "Hello Webpack!");
    */
    return <h3>Hello Babel!!</h3>;
  }
});

ReactDOM.render(<Hello />, document.getElementById("react"));
