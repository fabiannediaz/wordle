import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import GameStatus from './components/GameStatus';
import { getRandomWord } from './helpers/wordList';

function App() {
  const [gameWord, setGameWord] = useState(getRandomWord());
  const [gameStatus, setGameStatus] = useState<'playing' | 'winner' | 'looser' | 'loading'>('playing');

  useEffect(() => {
    if (gameStatus === 'playing') {
      const randomWord = getRandomWord();
      setGameWord(randomWord);
    }
    if (gameStatus === 'loading') {
      setGameStatus('playing' as any);
    }
  }, [gameStatus]);

  const resetGame = () => {
    setGameStatus('loading' as any);
  }

  let gameBoard = [(
    <Board
      key='board'
      gameWord={gameWord.split('')}
      gameStatus={gameStatus}
      setGameStatus={setGameStatus}
    />
  )];

  if (gameStatus === 'loading') {
    gameBoard = [];
  }
  else if (gameStatus !== 'playing') {
    gameBoard = gameBoard.concat(
      <GameStatus key='status' gameWord={gameWord} gameStatus={gameStatus} resetGame={resetGame} />
    )
  };

  return (
    <>
      {gameBoard}
    </>
  );
}

export default App;
