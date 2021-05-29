import React, { useState } from 'react';
import { render } from 'react-dom';
import Joke from './Joke';
import './style.css';
import jokes from './jokes';

const App = () => {
  return (
    <>
      <div className="container">
        {jokes.map((joke) => {
          return (
            <Joke
              userAvatar={joke.avatar}
              userName={joke.name}
              text={joke.text}
              likes={joke.likes}
              dislikes={joke.dislikes}
              key={joke.id}
            />
          );
        })}
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
