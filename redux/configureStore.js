import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { posts } from "./posts";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      posts,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
