import { combineReducers } from "redux";
import gamesReducers from "./gamesReducers";
import detailReducer from "./detailReducer";

const allReducers = combineReducers({
  games: gamesReducers,
  detail: detailReducer,
});

export default allReducers;
