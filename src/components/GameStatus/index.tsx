interface GameStatusProps {
  resetGame: any,
  gameStatus: 'playing' | 'winner' | 'looser' | 'loading',
  gameWord: string,
}

const GameStatus = (props: GameStatusProps) => {
  const { resetGame, gameStatus, gameWord } = props;

  return (
    <div>
      <h1>{gameStatus}</h1>
      <h2>Word: {gameWord}</h2>
      <button onClick={() => resetGame('playing')}>Restart</button>
    </div>
  )
}

export default GameStatus;