import React, { useContext } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import JokeContext from "../context/JokeContext";

const Joke = () => {
  const { speak, speaking } = useSpeechSynthesis();
  const jokeContext = useContext(JokeContext);

  const { joke, error, getJokes } = jokeContext;

  const onButtonClick = () => {
    getJokes();

    if (error) {
      speak({ text: error });
    }
    speak({
      text: joke,
    });
  };

  return (
    <div className="container">
      <button className="button" onClick={onButtonClick} disabled={speaking}>
        Tell Me A Joke
      </button>
    </div>
  );
};

export default Joke;
