import React, { useState } from "react";
// Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.png";
//Redux and Routes
import { fetchSearch } from "../Actions/gamesActions";
import { useDispatch } from "react-redux";
// Animation
import { fadeIn } from "../Animation";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  //Store input
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  //Submit search
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  //Clear Screen
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo onClick={clearSearched}>
        <img src={logo} alt='logo' />
        <h1>Game Park</h1>
      </Logo>
      <form className='search'>
        <input value={textInput} onChange={inputHandler} type='text' />
        <button onClick={submitSearch} type='submit'>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  background: black;
  color: white;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.6);
    outline: none;
  }
  button {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    border: none;
    background: #ff7676;
    color: white;
    cursor: pointer;
  }

  @media screen and (max-width: 818px) {
    padding: 3rem 4rem;
    input {
      width: 60%;
      padding: 0rem 0.5rem;
    }
    button {
      padding: 0rem 0.5rem;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
