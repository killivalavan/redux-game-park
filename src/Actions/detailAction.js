import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const gameDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  const detailData = await axios.get(gameDetailsURL(id));
  const screenshot = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshot.data,
    },
  });
};
