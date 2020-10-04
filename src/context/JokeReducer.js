import { GET_JOKES, GET_ERROR } from "./type";

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_JOKES:
      let newJoke;
      if (payload.setup) {
        newJoke = `${payload.setup} ..... ${payload.delivery}`;
      } else {
        newJoke = payload.joke;
      }
      return { ...state, joke: newJoke, error: null };
    case GET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
