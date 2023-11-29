import React, { useState, FormEvent } from 'react';
import Header from '../components/Header';

const Home = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const handleGuess = (e: FormEvent) => {
    e.preventDefault();
    const numGuess = Number(guess);
    if (numGuess === randomNumber) {
      setMessage('Congratulations! You guessed the number!');
    } else if (numGuess < randomNumber) {
      setMessage('Too low! Try again.');
    } else {
      setMessage('Too high! Try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <form onSubmit={handleGuess} className="p-5">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="mr-2 p-2"
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white">
          Guess
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Home;