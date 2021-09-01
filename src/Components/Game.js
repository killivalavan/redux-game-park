import React from "react";
// style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../Animation";
// Redux
import { useDispatch } from "react-redux";
import { gameDetail } from "../Actions/detailAction";
import { useHistory } from "react-router-dom";
import { gameDetailsURL } from "../api";
//Router
import { Link } from "react-router-dom";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();

  //Load Detail
  const dispatch = useDispatch();

  // Scroll Fix
  const { location } = useHistory();
  if (location.pathname === "/") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  const loadDetailHandler = () => {
    dispatch(gameDetail(id));
  };

  return (
    <StyledGame
      variants={popup}
      initial='hidden'
      animate='show'
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.img layoutId={`image ${stringPathId}`} src={image} alt={name} />
        <motion.h4 layoutId={`title ${stringPathId}`}>{name}</motion.h4>
        <p>{released}</p>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  overflow: hidden;
  background: #202020;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  p,
  h4 {
    //padding-left: 0.7rem;
    color: white;
  }
  @media screen and (max-width: 818px) {
    img {
      height: 30vh;
    }
  }
`;

export default Game;
