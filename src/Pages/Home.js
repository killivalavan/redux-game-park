import React, { useEffect } from "react";
import GameDetail from "../Components/GameDetail";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../Actions/gamesActions";
// Components
import Game from "../Components/Game";
// Styling
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../Animation";
// Router
import { useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  // get loaction
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const { popular, upcoming, newGames, searched } = useSelector(
    (state) => state.games
  );

  useEffect(() => {
    dispatch(loadGames());
  }, []);

  return (
    <GameList variants={fadeIn} initial='hidden' animate='show'>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
          {pathId && <GameDetail pathID={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div>
            <h2>Search results</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  id={game.id}
                  name={game.name}
                  released={game.released}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  background: black;
  padding: 0rem 5rem;
  h2 {
    color: white;
    padding: 5rem 0rem;
  }

  @media screen and (max-width: 818px) {
    h2 {
      padding: 3rem 0rem;
      font-size: 1.4rem;
    }
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 4rem;

  @media screen and (max-width: 818px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
  }
`;

export default Home;
