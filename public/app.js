import React from "react";
import ReactDOM from "react-dom";
import Main from "./Components/Main";
import Relay from "react-relay";

ReactDOM.render(<Main limit={2} />, document.getElementById("react"));

/* 
   Relay uses template tag functions to preprocess graphQL queries, 
   mutations and parse them using the server schema. 

   Please note that the "relay" plugin should run before other plugins or presets to ensure the graphql,
   template literals are correctly transformed.
*/
console.log(
  Relay.QL`
       query Test {
            links {
                title
            }
        }
    `
);
