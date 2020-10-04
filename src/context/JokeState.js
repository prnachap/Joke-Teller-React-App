import React, { useReducer } from "react";
import JokeReducer from "./JokeReducer";
import JokeContext from "./JokeContext";
import axios from "axios";
import { GET_JOKES, GET_ERROR } from "./type";

const JokeState = (props) => {
  const initialState = {
    joke: null,
    error: null,
  };

  const [state, dispatch] = useReducer(JokeReducer, initialState);

  //   get jokes
  const getJokes = async () => {
    try {
      const url = "https://sv443.net/jokeapi/v2/joke/any";
      const response = await axios.get(url);
      dispatch({ type: GET_JOKES, payload: response.data });
    } catch (error) {
      dispatch({
        type: GET_ERROR,
        payload: "Something Went Wrong Please Try Again",
      });
    }
  };

  return (
    <JokeContext.Provider
      value={{
        joke: state.joke,
        error: state.error,
        getJokes,
      }}
    >
      {props.children}
    </JokeContext.Provider>
  );
};

export default JokeState;
