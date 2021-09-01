//Base url
const base_url = "https://api.rawg.io/api/";

// Key things
const key = "41ebb60a0c27471dba559b5f6b3e7e34"; // YOUR KEY GOES HERE
const key_url = `key=${key}`;

//Getting Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Getting Day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Current Dat/Month/Year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popularGames = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?${key_url}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popularGames}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
export const newGamesURL = () => `${base_url}${newGames}`;

// Game Details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}.json?&${key_url}`;

// Screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&.json?&${key_url}`;

//Search
export const gameSearchURL = (game_name) =>
  `${base_url}games?search=${game_name}&${key_url}&page_size=9`;
