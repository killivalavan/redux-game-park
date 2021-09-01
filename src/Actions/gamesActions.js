import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  gameSearchURL,
} from "../api";

// Actions
export const loadGames = () => async (dispatch) => {
  // Fetch data
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  //Fetch Data
  const searchGames = await axios.get(gameSearchURL(game_name));

  dispatch({
    type: "SEARCHED_GAMES",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
