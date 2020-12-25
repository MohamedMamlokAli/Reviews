export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    const newPlaces = state.places.filter(
      (place) => place.id !== action.payload
    );
    console.log(state.places);
    return { ...state, places: newPlaces };
  }
};
