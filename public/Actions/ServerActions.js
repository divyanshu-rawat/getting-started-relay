import AppDispatcher from "../appDispatcher";
import { ActionTypes } from "../ActionTypes";

const ServerActions = {
  receiveLinks(links) {
    console.log("links", links);
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links
    });
  }
};

export default ServerActions;
