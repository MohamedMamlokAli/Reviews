import React, { useReducer, useState } from "react";
import { data } from "./data.js";
import { reducer } from "./reducer";
const defaultState = {
  reviews: data,
};
const Reviews = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const goNext = () => {
    if (base < 3) {
      setBase(base + 1);
    }
    if (base == 3) {
      setBase(0);
    }
  };
  const goBack = () => {
    if (base > 0) {
      setBase(base - 1);
    }
    if (base == 0) {
      setBase(3);
    }
  };
  const surprise = () => {
    let newBase = getRandomInt(4);
    if (base !== newBase) {
      setBase(newBase);
    } else {
      setBase(0);
    }
  };
  const [state, dispatcher] = useReducer(reducer, defaultState);
  const [base, setBase] = useState(0);
  return (
    <>
      <h1>Our Reviews</h1>
      <div className="review">
        <img className="user" src={state.reviews[base].img} alt="img" />
        <h4>{state.reviews[base].name}</h4>
        <p>{state.reviews[base].job}</p>
        <p>{state.reviews[base].review}</p>
        <button classname="round next" onClick={() => goNext()}>
          &#8249;
        </button>
        <button className="previous" onClick={() => goBack()}>
          Back
        </button>
        <button onClick={() => surprise()}>Surprise Me</button>
      </div>
    </>
  );
};

export default Reviews;
