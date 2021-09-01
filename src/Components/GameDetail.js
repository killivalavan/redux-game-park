import React from "react";
// style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
import { gameScreenshotURL } from "../api";
// exit
import { useHistory } from "react-router-dom";
// Platform Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
// Rating stars
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathID }) => {
  //Exit Handler
  const history = useHistory();

  //To Close GameDetails
  const exitHandler = (e) => {
    if (e.target.classList.contains("shadow")) {
      history.push("/");
    }
  };

  // Get Platform Images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox Series S/X":
        return xbox;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  // Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt='star' key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt='star' key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  const { game, screen, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className='shadow' onClick={exitHandler}>
          <Detail layoutId={pathID}>
            <Stats>
              <div className='rating'>
                <motion.h3 layoutId={`title ${pathID}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms &&
                    game.platforms.map((data) => (
                      <img
                        key={data.platform.id}
                        src={getPlatform(data.platform.name)}
                      ></img>
                    ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathID}`}
                src={game.background_image}
                alt='image'
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className='gallery'>
              {screen.results &&
                screen.results.map((screen) => (
                  <img src={screen.image} key={screen.id} alt='image' />
                ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  /* Scroll bar */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 3rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  h3 {
    padding-top: 1.5rem;
  }
  p {
    padding-top: 1rem;
  }
  img {
    width: 1.5rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
  h3 {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 818px) {
    text-align: left;
  }
`;

const Platforms = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
    width: 2rem;
  }

  @media screen and (max-width: 818px) {
    justify-content: left;
    align-items: flex-start;
    img {
      margin: 0rem .5rem 0rem 0rem;
      width: 1.5rem;
    }
    h
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 3rem 0rem;
`;

export default GameDetail;
