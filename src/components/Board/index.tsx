import { useEffect, useState } from "react";
import { getRandomWord, wordList } from "../../helpers/wordList";
import Line from "../Line";

interface BoardProps {
  gameWord: string[],
  gameStatus: 'playing' | 'winner' | 'looser' | 'loading',
  setGameStatus: any,
}

const Board = (props: BoardProps) => {
  const {
    gameWord,
    gameStatus,
    setGameStatus,
  } = props;

  const [currentLine, setCurrentLine] = useState(0);

  // useEffect(() => {
  //   fetch('https://api.frontendexpert.io/api/fe/wordle-words')
  //     .then((words) => setWordsList(words as any));
  //   console.log('wordsList', wordsList);
  // }, []);

  let squares: any[] = [];
  for (let i = 0; i < 6; i++) {
    squares = squares.concat(
      <div key={`line-${i}`} style={{ display: 'flex' }}>
        <Line
          currentLine={currentLine}
          setCurrentLine={setCurrentLine}
          lineNumber={i}
          gameWord={gameWord}
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
        />
      </div>
    );
  }

  return (
    <>
      {squares}
    </>
  )
}

export default Board;