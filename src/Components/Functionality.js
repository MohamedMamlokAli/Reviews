import { React, useReducer } from "react";
import { reducer } from "./reducer";
import { data } from "./data";
const stateDefault = {
  places: data,
};
const Functionality = () => {
  const [state, dispatch] = useReducer(reducer, stateDefault);

  return (
    <>
      {state.places.map((place) => {
        return (
          <div key={place.id}>
            <img src={place.img} alt={place.place} />
            <h4>{place.title}</h4>
            <p>{place.price}</p>
            <p>{place.description}</p>
            <button
              className="btn"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: place.id })
              }
            >
              Not interested
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Functionality;
