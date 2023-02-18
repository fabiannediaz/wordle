import { useEffect, useState } from "react";
import { checkMatchingLetters } from "../../helpers/wordList";
import Square from "../Square";

interface LineProps {
  currentLine: number,
  setCurrentLine: any,
  lineNumber: number,
  gameWord: string[],
  gameStatus: 'playing' | 'winner' | 'looser' | 'loading',
  setGameStatus: any,
}

const Line = (props: LineProps) => {
  const {
    currentLine,
    setCurrentLine,
    lineNumber,
    gameWord,
    gameStatus,
    setGameStatus,
  } = props;

  const [usedSquares, setUsedSquares] = useState(['', '', '', '', '']);
  const [matchingLetters, setMatchingLetters] = useState<string[]>(['', '', '', '', '']);

  useEffect(() => {
    const usedSquaresLength = usedSquares.join('').length;
    if (usedSquaresLength === 5) {
      setMatchingLetters(checkMatchingLetters(gameWord, usedSquares));
      if (gameWord.join('') === usedSquares.join('')) {
        setGameStatus('winner');
      }
      else if (currentLine + 1 === 6) {
        setGameStatus('looser');
      }
      else {
        setCurrentLine(currentLine + 1);
      }
    }
  }, [usedSquares]);

  let squaresState = 'unused';
  if (currentLine === lineNumber) {
    if (gameStatus === 'winner') {
      squaresState = 'matched';
    }
    if (gameStatus === 'looser') {
      squaresState = 'used';
    }
    else {
      squaresState = 'enable';
    }

  }
  let squares: any[] = [];

  for (let squareNumber = 0; squareNumber < 5; squareNumber++) {   
    if (currentLine > lineNumber || (currentLine === lineNumber && gameStatus !== 'playing') ) {
      squaresState = matchingLetters[squareNumber] !== ''
        ? 'matched'
        : 'used';
    }

    squares = squares.concat(
      <Square
        key={`cell-${squareNumber}-${lineNumber}`}
        state={squaresState as any}
        squareNumber={squareNumber}
        usedSquares={usedSquares}
        setUsedSquares={setUsedSquares}
      />
    );
  }

  return (
    <>
      {squares}
    </>
  )
}

export default Line;